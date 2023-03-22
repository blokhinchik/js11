// Confirm !!!
// let question1 = confirm("Are you people?");
// let question2 = confirm("Are you children?");
// let question3 = confirm("Do you like to drink a beer?");
// const arrConfirm = [question1, question2, question3];

// console.log(arrConfirm);

// Prompts !!!
// const question3 = prompt("Расскажи о себе: ");
// const question4 = prompt("Как ты провёл лето?");
// const arrPrompt = [];
// arrPrompt[0] = question3;
// arrPrompt[1] = question4;

// console.log(arrPrompt);

// Item access !!!
// let question5 = prompt("Введи номер индекса который ты хочешь видеть: ");
// const arrAccess = [
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
//   "ten",
// ];

// if (question5 === "1") {
//   console.log(arrAccess[0]);
// } else if (question5 === "2") {
//   console.log(arrAccess[1]);
// } else if (question5 === "3") {
//   console.log(arrAccess[2]);
// } else if (question5 === "4") {
//   console.log(arrAccess[3]);
// } else if (question5 === "5") {
//   console.log(arrAccess[4]);
// } else if (question5 === "6") {
//   console.log(arrAccess[5]);
// } else if (question5 === "7") {
//   console.log(arrAccess[6]);
// } else if (question5 === "8") {
//   console.log(arrAccess[7]);
// } else if (question5 === "9") {
//   console.log(arrAccess[8]);
// } else if (question5 === "10") {
//   console.log(arrAccess[9]);
// } else if (question5 === "length".toLowerCase()) {
//   console.log(arrAccess.length);
// } else {
//   console.log("Ничего тебе не покажу!");
// }

// Item change !!!
// const indexArr = [];
// const indexPrompt = prompt("Введите номер: ");
// const indexValue = prompt("Введите значение: ");

// indexArr[indexPrompt] = indexValue;

// console.log(indexArr);

// Multiply table !!!
// const arr = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4],
//   [0, 2, 4, 6, 8],
//   [0, 3, 6, 9, 12],
//   [0, 4, 8, 12, 16],
// ];

// console.log(arr[2][3]);

// Multiply table slice !!!
// const arr = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4],
//   [0, 2, 4, 6, 8],
//   [0, 3, 6, 9, 12],
//   [0, 4, 8, 12, 16],
// ];

// const newArr = arr.slice();
// const zero = newArr.shift(0);

// console.log(newArr);

// IndexOf Word	!!!
// const line = prompt("Напиши несколько слов: ");
// const word = prompt("Напиши слово: ");

// const lineSplit = line.split(" ");
// const lineIndexOf = lineSplit.indexOf(word);

// if (lineIndexOf >= 0) {
//   console.log(`${lineIndexOf} слово and ${lineSplit.length} общая длина`);
// } else if (lineIndexOf <= 0) {
//   console.log("Error!!!");
// }

// console.log(lineSplit);

// Reverse !!!
// const arr = [];
// for (let i = 0; i < 5; i++) {
//   arr.push(prompt("Writte smth: "));
// }

// const newArr = [];
// for (let i = 0; i < 5; i++) {
//   newArr.push(arr.pop());
// }
// console.log(newArr);

// Reverse 2 !!!
// const arr = [];
// for (let i = 0; i < 5; i++) {
//   arr.push(prompt("Writte smth: "));
// }

// const newArr = [];
// for (let i = 0; i < 5; i++) {
//   newArr.push(arr.pop());
// }
// const arrNew = [];
// for (let i = 0; i < 5; i++) {
//   arrNew.unshift(newArr.shift());
// }
// console.log(arrNew);

// Copy !!!
// const arr = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4],
//   [0, 2, 4, 6, 8],
//   [0, 3, 6, 9, 12],
//   [0, 4, 8, 12, 16],
// ];

// const newArr = arr.slice()
// console.log(newArr);

// Deep Copy !!!
// const arr = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4],
//   [0, 2, 4, 6, 8],
//   [0, 3, 6, 9, 12],
//   [0, 4, 8, 12, 16],
// ];

// const json = JSON.parse(JSON.stringify(arr));
// console.log(json);

// Array Equals !!!
// const arr = [1, 2, 3, 4];
// const arr1 = arr;
// console.log(arr === arr1);

// Flat !!!
// const arr = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4],
//   [0, 2, 4, 6, 8],
//   [0, 3, 6, 9, 12],
//   [0, 4, 8, 12, 16],
// ];

// const arrNew = [...arr[0], ...arr[1], ...arr[2], ...arr[3], ...arr[4]];
// console.log(arrNew);

// Destruct !!!
// const str = prompt("Введи текст:");
// let [a, , , , b, , , , c] = str;
// console.log(`первая буква = ${a}
// пятая буква = ${b}
// девятая буква = ${c}`);

// Destruct default !!!
// const str = prompt("Введи текст:");
// let [, a = "!", , b = "!", c = "!"] = str;
// console.log(`первая буква = ${a}
// пятая буква = ${b}
// девятая буква = ${c}`);

// Multiply table rest !!!
// const arr = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4],
//   [0, 2, 4, 6, 8],
//   [0, 3, 6, 9, 12],
//   [0, 4, 8, 12, 16],
// ];

// const [, [...a], [...b], [...c], [...d]] = arr;
// const newArr = [[...a], [...b], [...c], [...d]];
// console.log(newArr);

// For Alert !!!
// const arr = ["John", "Paul", "George", "Ringo"];
// for (a of arr) {
//   console.log(a);
// }

// For Select Option !!!
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<select>";
// for (const currency of currencies) {
//   str += `<option value="${currency}">${currency}</option>`;
// }
// str += "</select>";
// document.write(str); //document.write відобразить ваш HTML на сторінці

// For Table Horizontal !!!
// const names = ["John", "Paul", "George", "Ringo"];
// let str = "<table><tr>";
// for (const name of names) {
//   str += `<td>${name}</td>`;
// }
// str += "</tr></table>";
// document.write(str);

//For Table Vertical !!!
// const names = ["John", "Paul", "George", "Ringo"];
// let str = "<table>";
// for (const name of names) {
//   str += `<tr><td>${name}</td></tr>`;
// }
// str += "</table>";
// document.write(str);

// For Table Letters !!!
// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let   str = "<table>"
// for (const currency of currencies){
// 	str += `<tr></tr>`
//     for (const letter of currency){
// 			str += `<th>${letter}</th>`
//     }
// }
// str+= "</table>"
// document.write(str)

// For Multiply Table !!!
// const arr = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4],
//   [0, 2, 4, 6, 8],
//   [0, 3, 6, 9, 12],
//   [0, 4, 8, 12, 16],
// ];
// let str = `<table style = "width: 120px">`;

// for (let i of arr) {
//   str += `<tr>`;
//   for (let j of i) {
//     if (arr.indexOf(i) === 0) {
//       str += `<th style = "background: grey">${j}</th>`;
//     } else if (j % 2 === 0 && j > 0) {
//       str += `<td style = "background: red">${j}</td>`;
//     } else {
//       str += `<td style = "background: blue">${j}</td>`;
//     }
//   }
//   str += `</tr>`;
// }

// str += "</table>";
// document.write(str);

// Function Capitalize !!!
// const capitalize = str => {
// 	let result = str[0].toUpperCase() + str.slice(1).toLowerCase()
// 	return result //саме цей код забезпечить повернення результату функції
// }
// console.log(capitalize("cANBerRa")) //Canberra

// Map Capitalize !!!
// const str = prompt("Введите рядок: ");
// const strSplit = str.split(" ");
// const strMap = strSplit.map(
//   (x) => x[0].toUpperCase() + x.slice(1).toLowerCase()
// );
// const strJoin = strMap.join(" ");
// alert(strJoin);

// Filter Lexics !!!
// const str = prompt("Введите рядок: ");
// const strSplit = str.split(" ");
// const strFilter = strSplit.filter((word) => !word.includes("fuck"));
// const strJoin = strFilter.join(" ");
// console.log(strJoin);

//Beep Lexics !!!
// const str = prompt("Введите текст: ");
// const badWords = ["fuck", "bitch"];
// const strSplit = str.split(" ");
// const strMap = strSplit.map((word) =>
//   badWords.includes(word) ? (word = "BEEP") : word
// );
// const strJoin = strMap.join(" ");
// console.log(strJoin);

// Reduce HTML !!!
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<select>";
// str += currencies.reduce(
//   (acc, Item) => acc + `<option value="${Item}">${Item}</option>`,
//   0
// );
// str += "</select>";
// document.write(str);

// For Brackets Hell Check !!!
// Это задание оказалось мне не по силе(