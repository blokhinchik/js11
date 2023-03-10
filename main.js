// String: greeting

// let name = prompt("What is your name?");
// let greeting = `Hello, ${name}`
// alert(greeting);

// String: gopni4ek

// let text = prompt("Введите текст:");
// let text2 = text.split(",").join(" блин,");
// alert(text2);

// String: capitalize

// let str = "cANBerRa"
// let result = str[0].toUpperCase() + str.slice(1).toLowerCase()
// console.log(result) //Canberra

// String: word count

// let count = "Какой-то непонятный текст о непонятно чём"
// let countArr = count.split(" ")
// console.log(countArr.length);

// String: credentials

// let firstName = prompt("Name");
// let firstName1 = firstName[0].toUpperCase() + firstName.slice(1);
// let lastName = prompt("LastName");
// let lastName1 = lastName[0].toUpperCase() + lastName.slice(1);
// let patronymic = prompt("Patronymic");
// let patronymic1 = patronymic[0].toUpperCase() + patronymic.slice(1);
// let fullName = `${firstName1} ${lastName1} ${patronymic1}`;
// console.log(fullName);

// String: beer

// let beer = "Було жарко. Василь пив пиво вприкуску з креветками";
// let beer1 = beer.split(" ");
// for (let i = 0; i < beer1.length; i++) {
//   if (beer1[i] === "пиво") {
//     beer1[i] = "чай";
//   }
// }
// let beer2 = beer1.join(" ");
// console.log(beer2); //"Було жарко. Василь пив чай уприкуску з креветками"

// String: no tag

// let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
// let result;

// const start = str.indexOf("<");
// if (start >= 0) {
//   const end = str.indexOf(">", start) + 1;
//   if (end >= 0) {
//     result = str.slice(0, start) + str.slice(end);
//   } else {
//     result = str.slice(0, start);
//   }
// } else {
//   result = str;
// }

// console.log(result);

// String: big tag

// let str = "якийсь текст у якому є один тег <br /> і всяке інше";
// let result =
//   str.slice(0, str.indexOf("<br")) +
//   "<BR />" +
//   str.slice(str.indexOf("/>") + 2);
// console.log(result);

// String: new line

// let multiLineText = prompt(
//   "Введите несколько строк текста, разделяя их символом \\n:"
// );
// let lines = multiLineText.split("\\n").join("\n");
// console.log(lines);

// String: youtube

// const numberRegExp =
//   /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?([a-zA-Z0-9-_]{11})/;
// const str = prompt("Write something: ");
// const match = str.match(numberRegExp);
// const videoId = match[1];
// const videoHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
// document.write(videoHtml);
