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
// ДЛЯ ЭТОГО ЗАДАНИЯ Я НЕ СДЕЛАЛ ЗАДАНИЕ С ПРОШЛОЙ ЛЕКЦИИ

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
