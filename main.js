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
