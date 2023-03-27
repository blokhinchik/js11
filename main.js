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
// const admin = "admin";
// const password = "password";
// const authorization = (login, password) => {
//   let log = prompt("Login: ");
//   let pass = prompt("Password: ");

//   if (log === login && pass === password) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(authorization(admin, password));

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
