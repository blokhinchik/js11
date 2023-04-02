
// Temperature !!!
// let pro = prompt();

// let temperature = (temp) => {
//   return temp * 1.8 + 32;
// };

// let f = temperature(pro);

// alert(f);

// RGB !!!
// let rgb = (r, g, b) => {
//   let red = r < 16 ? "0" + r.toString(16) : r.toString(16);
//   let green = g < 16 ? "0" + g.toString(16) : g.toString(16);
//   let blue = b < 16 ? "0" + b.toString(16) : b.toString(16);
//   return `#` + red + green + blue;
// };

// console.log(rgb(0, 0, 0));

// Flats !!!
// const floorsPerEntrance = 10;
// let numberOfFlats = (flatNumber, flatsPerFloor) => {
//   // розрахунок кількості квартир в під'їзді
//   const flatsPerEntrance = flatsPerFloor * floorsPerEntrance;

//   // розрахунок номеру під'їзду
//   const entrance = Math.floor((flatNumber - 1) / flatsPerEntrance) + 1;

//   // розрахунок номеру поверху
//   const relativeFloor = Math.floor(
//     ((flatNumber - 1) % flatsPerEntrance) / flatsPerFloor
//   );
//   const floor = relativeFloor + 1;

//   // повернення об'єкту з номером під'їзду та поверху
//   const obj = { entrance: entrance, floor: floor };
//   return obj;
// };

// console.log(numberOfFlats(116, 5));

// Credentials !!!
// const capitalize = () => {
//   let firstName = prompt("Имя: ");
//   let lastName = prompt("Фамилия: ");
//   let surname = prompt("Отчество: ");
//   let first =
//     firstName[0].toUpperCase() + firstName.slice(1).trim().toLowerCase();
//   let last = lastName[0].toUpperCase() + lastName.slice(1).trim().toLowerCase();
//   let sur = surname[0].toUpperCase() + surname.slice(1).trim().toLowerCase();
// 	let obj = {name: first, lastName: last, surname: sur}
// 	return obj
// };

// console.log(capitalize());

// New line !!!
// const string = (str) => {
// 	return str.split("\\n").join("\n")
// };

// const text = "Рядок з новим рядком: \\nЦе наступний рядок."
// console.log(string(text));

// Prompt OR !!!
// const question = prompt("text: ");
// const defaultName = "dich";
// const prompt2 = (promptText, defaultValue) =>
//   !promptText || promptText === "" ? defaultValue : promptText;

// console.log(prompt2(question, defaultName));

// Login And Password !!!
// const authorization = (correctLogin, correctPassword) => {
//   let userLogin = prompt("Login: ");
//   let userPassword = prompt("Password: ");

//   if (userLogin === correctLogin && userPassword === correctPassword) {
//     return true;
//   } else {
//     return false;
//   }
// };
// if (authorization("admin", "qwerty")) {
//   console.log("Данные введены верно)))");
// } else {
//   console.log("Вы ввели неправильные данные!!!");
// }

// FOR TABLE !!!
=======

// Literals !!!
// const cat = {
//   name: "Барсик",
//   age: "1 year",
//   color: "бело-рыжий",
// };

// Literals expand !!!
// const obj = {
//   [prompt()]: prompt(),
//   [prompt()]: prompt(),
//   [prompt()]: prompt(),
// };
// console.log(obj);

// Literals copy !!!
// const obj = {
//   [prompt()]: prompt(),
//   [prompt()]: prompt(),
// };

// const obj1 = {
//   key: "value",
//   ...obj,
// };
// console.log(obj1);

// Html tree !!!
// const body = {
//   tagName: "body",
//   children: [
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "span",
//           children: ["Enter a data please:"],
//         },
//         {
//           tagName: "br",
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "name",
//           },
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "surname",
//           },
//         },
//       ],
//     },
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "button",
//           attrs: {
//             id: "ok",
//           },
//           children: ["OK"],
//         },
//         {
//           tagName: "button",
//           attrs: {
//             id: "cancel",
//           },
//           children: ["Cancel"],
//         },
//       ],
//     },
//   ],
// };

// console.log(body.children[1].children[1].children[0]);
// console.log(body.children[0].children[3].attrs.id);

// Parent !!!
// const body = {
//   tagName: "body",
//   children: [
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "span",
//           children: ["Enter a data please:"],
//         },
//         {
//           tagName: "br",
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "name",
//           },
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "surname",
//           },
//         },
//       ],
//     },
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "button",
//           attrs: {
//             id: "ok",
//           },
//           children: ["OK"],
//         },
//         {
//           tagName: "button",
//           attrs: {
//             id: "cancel",
//           },
//           children: ["Cancel"],
//         },
//       ],
//     },
//   ],
// };

// body.children[0].parent = body;
// body.children[1].parent = body;

// body.children[0].children[0].parent = body.children[0];
// body.children[0].children[1].parent = body.children[0];
// body.children[0].children[2].parent = body.children[0];
// body.children[0].children[3].parent = body.children[0];

// body.children[1].children[0].parent = body.children[1];
// body.children[1].children[1].parent = body.children[1];

// body.children[0].children[2].attrs.parent = body.children[0].children[2];
// body.children[0].children[3].attrs.parent = body.children[0].children[3];

// body.children[1].children[0].attrs.parent = body.children[1].children[0];
// body.children[1].children[1].attrs.parent = body.children[1].children[1];
// console.log(body);

// Change OK !!!
// const body = {
//   tagName: "body",
//   children: [
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "span",
//           children: ["Enter a data please:"],
//         },
//         {
//           tagName: "br",
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "name",
//           },
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "surname",
//           },
//         },
//       ],
//     },
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "button",
//           attrs: {
//             id: "ok",
//           },
//           children: ["OK"],
//         },
//         {
//           tagName: "button",
//           attrs: {
//             id: "cancel",
//           },
//           children: ["Cancel"],
//         },
//       ],
//     },
//   ],
// };
// delete body.children[1].children[0].attrs.id;
// body.children[1].children[0].attrs[prompt()] = prompt();

// console.log(body);

// Destructure !!!
// const body = {
//   tagName: "body",
//   children: [
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "span",
//           children: ["Enter a data please:"],
//         },
//         {
//           tagName: "br",
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "name",
//           },
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "surname",
//           },
//         },
//       ],
//     },
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "button",
//           attrs: {
//             id: "ok",
//           },
//           children: ["OK"],
//         },
//         {
//           tagName: "button",
//           attrs: {
//             id: "cancel",
//           },
//           children: ["Cancel"],
//         },
//       ],
//     },
//   ],
// };

// const {
//   children: [
//     {
//       children: [{ tagName }],
//     },
//   ],
// } = body;

// const {
//   children: [
//     ,
//     {
//       children: [
//         ,
//         {
//           children: [cancel],
//         },
//       ],
//     },
//   ],
// } = body;

// const {
//   children: [
//     {
//       children: [
//         ,
//         ,
//         ,
//         {
//           attrs: { id },
//         },
//       ],
//     },
//   ],
// } = body;
// console.log(tagName);
// console.log(cancel);
// console.log(id);

// Destruct array !!!
// let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

// let even = arr.filter((item) => item % 2 === 0);
// let odd = arr.filter((item) => item % 2 !== 0 && item > 0);
// let letter = arr.filter((item) => typeof item === "string");

// let [even1, even2] = even;
// let [odd1, odd2, odd3] = odd;

// console.log(even1);
// console.log(even2);
// console.log(odd1);
// console.log(odd2);
// console.log(odd3);
// console.log(letter);

// Destruct string !!!
// let arr = [1, "abc"];
// let [number, [s1, s2, s3]] = arr;

// Destruct 2 !!!
// let obj = {
//   name: "Ivan",
//   surname: "Petrov",
//   children: [{ name: "Maria" }, { name: "Nikolay" }],
// };
// let {children:[{name: name1}, {name: name2}]} = obj
// console.log(name1);
// console.log(name2);

// Destruct 3 !!!
// let arr = [1, 2, 3, 4, 5, 6, 7, 10];
// let { 0: a, 1: b, length } = arr;
// console.log(a);
// console.log(b);
// console.log(length);

// Copy delete !!!
// const cat = {
//   name: "Барсик",
//   age: "1 year",
//   color: "бело-рыжий",
// };
// const {age, ...etc} = cat
// console.log(etc);

// Currency real rate !!!
// fetch("https://open.er-api.com/v6/latest/USD")
//   .then((res) => res.json())
//   .then((data) => {
//     let rates = data.rates;
//     let cell = prompt(
//       "Введите валюту которую вы хотите продать:"
//     ).toUpperCase();
//     let buy = prompt("Введите валюту которую вы хотите купить: ").toUpperCase();
//     let summa = prompt("Введите сумму: ");
//     if (
//       rates[cell] === data.rates[cell] &&
//       rates[buy] === data.rates[buy] &&
//       rates[buy] !== undefined
//     ) {
//       rates = (summa * data.rates[buy]) / data.rates[cell];
//       console.log(`Вы получили ${Math.round(rates)} ${buy}`);
//     } else {
//       console.log("Некорректное значение валют!");
//     }
//   });

// Currency drop down !!!
// fetch("https://open.er-api.com/v6/latest/USD")
//   .then((res) => res.json())
//   .then((data) => {
//     let str = `<select>`;
//     for (const key in data.rates) {
//       str += `<option value = "${key}">${key}</option>`;
//     }
//     str += `</select>`;
//     document.write(str);
//   });

// Currency table !!!
// fetch("https://open.er-api.com/v6/latest/USD")
//   .then((res) => res.json())
//   .then((data) => {
//     let column = [];
//     for (const i in data.rates) {
//       column.push(i);
//     }
//     let table = `<table><tr><td></td>`;
//     for (const i in column) {
//       table += `<th>${column[i]}</th>`;
//     }
//     table += `</tr>`;

//     for (const i in column) {
//       table += `<tr><th>${column[i]}</th>`;
//       for (const j in column) {
//         table += `<td>${data.rates[column[i]] / data.rates[column[j]]}</td>`;
//       }
//       table += `</tr>`;
//     }
//     table += `</table>`;
//     document.write(table);
//   });

// Form !!!
// const car = {
//   Name: "chevrolet chevelle malibu",
//   Cylinders: 8,
//   Displacement: 307,
//   Horsepower: 130,
//   Weight_in_lbs: 3504,
//   Origin: "USA",
//   in_production: false,
// };
// let str = "<form >";
// let table = `<table style = "border: 1px solid; width: 20p"><tr><th>JS</th><th>HTML</th></tr>`;
// for (const key in car) {
//   let inputType = typeof car[key];
//   let htmlType;
//   if (inputType === "string") {
//     htmlType = "text";
//   } else if (inputType === "number") {
//     htmlType = "number";
//   } else {
//     htmlType = "checkbox";
//   }
//   str += `<label style = "display: block; margin-bottom: 20px">${key}<input type="${htmlType}" value="${car[key]}"/></label>`;

//   table += `<tr><td style = "border: 1px solid">${inputType}</td><td style = "border: 1px solid">${htmlType}</td></tr>`;
// }
// str += "</form>";
// table += "</table>";

// document.write(str);
// document.write(table);

// Table !!!
// const cars = [
//   {
//     Name: "chevrolet chevelle malibu",
//     Cylinders: 8,
//     Displacement: 307,
//     Horsepower: 130,
//     Weight_in_lbs: 3504,
//     Origin: "USA",
//   },
//   {
//     Name: "buick skylark 320",
//     Miles_per_Gallon: 15,
//     Cylinders: 8,
//     Displacement: 350,
//     Horsepower: 165,
//     Weight_in_lbs: 3693,
//     Acceleration: 11.5,
//     Year: "1970-01-01",
//   },
//   {
//     Miles_per_Gallon: 18,
//     Cylinders: 8,
//     Displacement: 318,
//     Horsepower: 150,
//     Weight_in_lbs: 3436,
//     Year: "1970-01-01",
//     Origin: "USA",
//   },
//   {
//     Name: "amc rebel sst",
//     Miles_per_Gallon: 16,
//     Cylinders: 8,
//     Displacement: 304,
//     Horsepower: 150,
//     Year: "1970-01-01",
//     Origin: "USA",
//   },
// ];

// let column = [];
// for (let i in cars) {
//   for (let j in cars[i]) {
//     if (!column.includes(j)) {
//       column.push(j);
//     }
//   }
// }

// let table = `<table style = "border: 1px solid black; text-align: center"><thead><tr>`;
// for (let i in column) {
//   table += `<th style = "padding: 10px;">${column[i]}</th>`;
// }
// table += `</tr></thead><tbody>`;

// for (let i in cars) {
//   table += `<tr>`;
//   for (let j in column) {
//     table += `<td style = "padding: 10px">${cars[i][column[j]] || ""}</td>`;
//   }
//   table += `</tr>`;
// }
// table += `</tbody></table>`;
// document.write(table);

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
// function table(array) {
//   let str = `<table style = "width: 120px">`;
//   for (let i of array) {
//     str += `<tr>`;
//     for (let j of i) {
//       if (arr.indexOf(i) === 0) {
//         str += `<th style = "background: grey">${j}</th>`;
//       } else if (j % 2 === 0 && j > 0) {
//         str += `<td style = "background: red">${j}</td>`;
//       } else {
//         str += `<td style = "background: blue">${j}</td>`;
//       }
//     }
//     str += `</tr>`;
//   }
//   str += "</table>";
//   return document.write(str);
// }

// table(arr);

// FILTER LEXICS !!!
// const text = "Це тестовий текст зі словом бляха та пляшка.";

// const filter = (str) => {
//   const badWords = ["бляха", "муха", "пляшка", "шабля"];
//   const strSplit = str.split(" ");
//   const strFilter = strSplit.filter((word) => !badWords.includes(word));
//   const strJoin = strFilter.join(" ");
//   return strJoin;
// };

// console.log(filter(text));

// CURRENCY TABLE !!!
// const currTable = async () => {
//   const arr = [];
//   const res = await fetch("https://open.er-api.com/v6/latest/USD");
//   const data = await res.json();
//   const rates = data.rates;
//   const currencies = Object.keys(rates);
//   arr.push(JSON.parse(JSON.stringify(currencies)));
//   arr[0].unshift(" ");
//   for (const currency1 of currencies) {
//     const row = [currency1];
//     for (const currency2 of currencies) {
//       if (currency1 === currency2) {
//         row.push("1.00");
//       } else {
//         const crossRate = rates[currency2] / rates[currency1];
//         const result = crossRate.toFixed(2);
//         row.push(`${result}`);
//       }
//     }
//     arr.push(row);
//   }
//   forTable(arr);
// };

// currTable();

// FORM !!!
// const persons = [
//   {
//     name: "Марія",
//     fatherName: "Іванівна",
//     surname: "Іванова",
//     sex: "female",
//   },
//   {
//     name: "Миколай",
//     fatherName: "Іванович",
//     surname: "Іванов",
//     age: 15,
//   },
//   {
//     name: "Петро",
//     fatherName: "Іванович",
//     surname: "Іванов",
//     married: true,
//   },
// ];

// const table = (obj) => {
//   let column = [];
//   for (let i in obj) {
//     for (let j in obj[i]) {
//       if (!column.includes(j)) {
//         column.push(j);
//       }
//     }
//   }

//   let table = `<table style = "border: 1px solid black; text-align: center"><thead><tr>`;
//   for (let i in column) {
//     table += `<th style = "padding: 10px;">${column[i]}</th>`;
//   }
//   table += `</tr></thead><tbody>`;

//   for (let i in obj) {
//     table += `<tr>`;
//     for (let j in column) {
//       table += `<td style = "padding: 10px">${obj[i][column[j]] || ""}</td>`;
//     }
//     table += `</tr>`;
//   }
//   table += `</tbody></table>`;
//   document.write(table);
// };

// table(persons);

// ARRAY OF OBJECT SORT !!!
// const sortNewFunction = (arr, prop, ascending = true) => {
//   if (ascending) {
//     return arr.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
//   } else {
//     return arr.sort((a, b) => (a[prop] < b[prop] ? 1 : -1));
//   }
// };
// let persons = [
//   { name: "Іван", age: 17 },
//   { name: "Марія", age: 35 },
//   { name: "Олексій", age: 73 },
//   { name: "Яків", age: 12 },
// ];

// console.log(sortNewFunction(persons, "age"));

// TABLE !!!

// CALC FUNC !!!
// const math = (distance, consumption, price) => {
//   let spendMoney = distance * (consumption / 100) * price;
//   return spendMoney;
// };

// console.log(math(100, 8, 50));

// CALC LIVE !!!
// const calcMoneyOfConsumption = () => {
//   const distance = document.getElementById("distance");
//   const consumption = document.getElementById("consumption");
//   const price = document.getElementById("price");
//   const divResult = document.getElementById("divResult");

//   const distanceValue = Number(distance.value);
//   const consumptionValue = Number(consumption.value);
//   const priceValue = Number(price.value);

//   if (consumptionValue === 0) {
//     divResult.innerHTML = "Введите расход";
//   } else if (priceValue === 0) {
//     divResult.innerHTML = "Введите цену бензина";
//   } else {
//     const result = distanceValue * (consumptionValue / 100) * priceValue;
//     divResult.innerHTML = `Вы потратили ${result.toFixed(
//       1
//     )} грн за ${distanceValue} км`;
//   }
// };

// distance.oninput = consumption.oninput = price.oninput = calcMoneyOfConsumption;

// DIVIDE !!!
// const calcResult = () => {
//   const firstInput = document.getElementById("firstNumber");
//   const secondInput = document.getElementById("secondNumber");
//   const resultDiv = document.getElementById("divisionResult");

//   const firstValue = Number(firstInput.value);
//   const secondValue = Number(secondInput.value);
//   if (secondValue === 0) {
//     resultDiv.innerHTML = "Данное число на 0 не множится!";
//   } else {
//     const result = firstValue / secondValue;
//     resultDiv.innerHTML = `Result: ${result.toFixed(2)}`;
//   }
// };

// firstNumber.oninput = secondNumber.oninput = calcResult;

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
