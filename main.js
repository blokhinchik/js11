// Chat

// function jsonPost(url, data) {
//   return new Promise((resolve, reject) => {
//     var x = new XMLHttpRequest();
//     x.onerror = () => reject(new Error("jsonPost failed"));
//     //x.setRequestHeader('Content-Type', 'application/json');
//     x.open("POST", url, true);
//     x.send(JSON.stringify(data));

//     x.onreadystatechange = () => {
//       if (x.readyState == XMLHttpRequest.DONE && x.status == 200) {
//         resolve(JSON.parse(x.responseText));
//       } else if (x.status != 200) {
//         reject(new Error("status is not 200"));
//       }
//     };
//   });
// }

// console.log(
//   jsonPost("http://students.a-level.com.ua:10012", {
//     func: "addMessage",
//     nick: "Anon",
//     message: "",
//   })
// );

// Stage 6

async function jsonPost(url, data) {
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`status: ${res.status}`);
    }
    return res.json();
  });
}

const form = document.createElement("form");

const userName = document.createElement("input");
userName.placeholder = "Name";
userName.style = "width: 70px; margin-right: 20px";

const text = document.createElement("input");
text.placeholder = "Enter text";
text.style = "margin-right: 5px";

const button = document.createElement("button");
button.innerText = "Send";
button.onclick = sendAndCheck;
form.append(userName, text, button);

const container = document.createElement("div");
document.body.append(container);
container.append(form);

const sms = document.createElement("div");
container.append(sms);

let updateMessageId = 0;
async function sendAndCheck() {
  event.preventDefault();
  await sendMessage(userName.value, text.value);
  userName.value = "";
  text.value = "";
  await getMessages();
  updateMessageId = updateMessageId
    ? updateMessageId
    : allMessages.nextMessageId + 1;
}
async function sendMessage(nick, message) {
  return await jsonPost("http://students.a-level.com.ua:10012", {
    func: "addMessage",
    nick,
    message,
  });
}

async function getMessages() {
  const allMessages = await jsonPost("http://students.a-level.com.ua:10012", {
    func: "getMessages",
    messageId: updateMessageId,
  });
  for (const message of allMessages.data) {
    let messageDiv = document.createElement("div");
    let nick = document.createElement("span");
    nick.innerText = `${message.nick}: `;
    nick.style.fontWeight = "bold";
    messageDiv.append(nick);
    let messageText = message.message;
    messageDiv.append(messageText);
    sms.prepend(messageDiv);
  }
}

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function checkLoop() {
  while (true) {
    await getMessages();
    await delay(5000);
  }
}
function clearMemory() {
  window.location.reload(); // Reload the page to clear memory
}

window.onload = () => {
  checkLoop();
  setInterval(clearMemory, 60000);
};
