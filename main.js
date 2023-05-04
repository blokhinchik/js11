// FETCH BASIC !!! AND FETCH IMPROVED !!!

// const buildTable = (url, DOM) =>
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       displayJSON(DOM, data);
//     });

// function displayJSON(DOM, data) {
//   const table = document.createElement("table");
//   const trHead = document.createElement("tr");
//   table.style.border = "1px solid black";
//   table.style.height = "300px";

//   for (let key in data) {
//     const th = document.createElement("th");
//     th.innerText = key;
//     th.style.border = "1px solid black";
//     trHead.append(th);
//   }

//   const trBody = document.createElement("tr");
//   for (let key in data) {
//     const td = document.createElement("td");
//     const value = data[key];
//     if (typeof value === "string" && value.startsWith(`https://`)) {
//       const button = document.createElement("button");
//       button.innerText = value;
// 			button.onclick = () =>{
// 				buildTable(value, td)
// 			}
// 			td.append(button);
//     } else if (
//       typeof value === "object" &&
//       typeof value[0] === "string" &&
//       value[0].startsWith(`https://`)
//     ) {
//       for (let key of value) {
//         const button1 = document.createElement("button");
//         button1.innerText = key;
// 				button1.onclick = () =>{
// 					buildTable(key, td)
// 				}
//         td.append(button1);
//       }
//     } else {
//       td.innerText = data[key];
//     }
//     td.style.border = "1px solid black";
//     trBody.append(td);
//   }

//   table.append(trHead);
//   table.append(trBody);

//   DOM.append(table);
// }

// buildTable(`https://swapi.dev/api/people/1/`, document.body);

// RACE !!!

// const myFetch = fetch("https://swapi.dev/api/");
// const delay = (ms) => {
//   return new Promise((ok) => setTimeout(() => ok(ms), ms));
// };

// Promise.race([myFetch, delay(60)]).then((result) =>
//   console.log("The faster promise was:", result)
// );

// PROMISIFY: CONFIRM !!!

// function confirmPromise(text) {
//   return new Promise((resolve, reject) => {
//     const confirmed = confirm(text);
//     if (confirmed) {
//       resolve(text);
//     } else {
//       reject();
//     }
//   });
// }

// confirmPromise("Проміси це складно?").then(
//   () => console.log("не так вже й складно"),
//   () => console.log("respect за посидючість і уважність")
// );

// 	PROMISIFY PROMPT !!!

// function promptPromise(text) {
//   return new Promise((resolve, reject) => {
//     const question = prompt(text, "голова");
//     if (question) {
//       resolve(question);
//     } else {
//       reject();
//     }
//   });
// }
// promptPromise("Як тебе звуть?").then(
//   (name) => console.log(`Тебе звуть ${name}`),
//   () => console.log("Ну навіщо морозитися, нормально ж спілкувалися")
// );

// PROMISIFY LOGIN FORM !!!

function Password(parent, open) {
  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "PASSWORD";
  parent.append(input);

  const toggle = document.createElement("button");
  toggle.id = "toggle";
  toggle.innerText = "Open";
  parent.append(toggle);

  value = "";
  isOpen = open;

  this.setValue = (newValue) => {
    value = newValue;
    input.value = value;
  };
  this.getValue = () => {
    return input.value;
  };
  this.setOpen = (newOpen) => {
    isOpen = newOpen;
    if (isOpen) {
      toggle.innerText = "Open";
      input.type = "text";
    } else {
      toggle.innerText = "Hide";
      input.type = "password";
    }
    this.getOpen = () => {
      return isOpen;
    };
  };
  input.oninput = () => {
    value = input.value;
    if (typeof this.onChange === "function") {
      this.onChange(value);
    }
  };
  toggle.onclick = () => {
    isOpen = !isOpen;
    if (isOpen) {
      toggle.innerText = "Open";
      input.type = "text";
    } else {
      toggle.innerText = "Hide";
      input.type = "password";
    }
    if (typeof this.onOpenChange === "function") {
      this.onOpenChange(isOpen);
    }
  };
}

function LoginForm(parent, open) {
  const loginInput = document.createElement("input");
  loginInput.type = "text";
  loginInput.placeholder = "User Name";
  loginInput.oninput = () => {
    this.disabledButton();
  };
  parent.append(loginInput);

  const passwordInput = new Password(parent, open);
  passwordInput.onChange = () => {
    this.disabledButton();
  };

  const submitButton = document.createElement("button");
  submitButton.id = "submitButton";
  submitButton.type = "submit";
  submitButton.innerText = "Отправить";
  submitButton.onclick = () => {
    console.log(
      `Your data has been successfully sent: ${this.getLogin()} ${passwordInput.getValue()}`
    );
    this.setLogin("");
    passwordInput.setValue("");
    this.disabledButton();
  };
  parent.append(submitButton);

  this.getLogin = () => {
    return loginInput.value;
  };

  this.setLogin = (newLogin) => {
    loginInput.value = newLogin;
  };
  this.getSubmitButton = () => {
    return submitButton;
  };
  this.getPassword = () => {
    return passwordInput.getValue();
  };
  this.disabledButton = () => {
    if (this.getLogin().length < 1 || passwordInput.getValue().length < 1) {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  };
  this.disabledButton();
}

function loginPromise(parent) {
  function executor(resolve, reject) {
    const form = new LoginForm(parent, false);
    const btn = form.getSubmitButton();
    btn.onclick = () => {
      resolve({ login: form.getLogin(), password: form.getPassword() });
    };
  }

  return new Promise(executor);
}

loginPromise(document.body).then(({ login, password }) =>
  console.log(`Ви ввели ${login} та ${password}`)
);
