// ARROW TO FUNCTIONS !!!

// 1
// const pro = prompt();

// function temperature(temp) {
//   return temp * 1.8 + 32;
// }

// let f = temperature(pro);

// alert(f);

// 2
// function rgb(r, g, b) {
//   let red = r < 16 ? "0" + r.toString(16) : r.toString(16);
//   let green = g < 16 ? "0" + g.toString(16) : g.toString(16);
//   let blue = b < 16 ? "0" + b.toString(16) : b.toString(16);
//   return `#` + red + green + blue;
// }

// console.log(rgb(0, 0, 0));

// 3
// function string(str) {
//   return str.split("\\n").join("\n");
// }

// const text = "Рядок з новим рядком: \\nЦе наступний рядок.";
// console.log(string(text));

// 4
// const question = prompt("text: ");
// const defaultName = "dich";
// function prompt2(promptText, defaultValue) {
//   return !promptText || promptText === "" ? defaultValue : promptText;
// }

// console.log(prompt2(question, defaultName));

// 5
// function capitalize() {
//   let firstName = prompt("Имя: ");
//   let lastName = prompt("Фамилия: ");
//   let surname = prompt("Отчество: ");
//   let first =
//     firstName[0].toUpperCase() + firstName.slice(1).trim().toLowerCase();
//   let last = lastName[0].toUpperCase() + lastName.slice(1).trim().toLowerCase();
//   let sur = surname[0].toUpperCase() + surname.slice(1).trim().toLowerCase();
//   let obj = { name: first, lastName: last, surname: sur };
//   return obj;
// }

// console.log(capitalize());

// CREATE PERSON !!!

// const createPerson = (name, surname) => {
//   return {
//     name: name,
//     surname: surname,
//     getFullName: function () {
//       return this.name + " " + this.surname + " " + this.fatherName;
//     },
//   };
// };

// let person = createPerson("Dima", "Blokhin");
// console.log(person.getFullName());
// person.fatherName = "Igorovich";
// console.log(person.getFullName());
// console.log(person);

// CREATE PERSON CLOSURE !!!

// const createPersonClosure = (name, surname) => {
//   let age;
//   let fatherName;
//   const getName = () => {
//     return name;
//   };
//   const getSurname = () => {
//     return surname;
//   };
//   const getFatherName = () => {
//     return fatherName;
//   };
//   const getAge = () => {
//     return age;
//   };
//   const getFullName = () => {
//     return `${name}  ${surname}  ${fatherName}`;
//   };
//   const setName = (newName) => {
//     if (
//       typeof newName === "string" &&
//       newName[0] === newName[0].toUpperCase()
//     ) {
//       name = newName;
//     }
//     return name;
//   };
//   const setSurname = (newSurname) => {
//     if (
//       typeof newSurname === "string" &&
//       newSurname[0] === newSurname[0].toUpperCase()
//     ) {
//       surname = newSurname;
//     }
//     return surname;
//   };
//   const setFatherName = (newFatherName) => {
//     if (
//       typeof newFatherName === "string" &&
//       newFatherName[0] === newFatherName[0].toUpperCase()
//     ) {
//       fatherName = newFatherName;
//     }
//     return fatherName;
//   };
//   const setAge = (newAge) => {
//     if (newAge > 0 && newAge <= 100) {
//       age = Number(newAge);
//     }
//     return age;
//   };
//   const setFullName = (newFullName) => {
//     if (typeof newFullName === "string") {
//       const fullName = newFullName.split(" ");
//       if (fullName[0][0] === fullName[0][0].toUpperCase()) {
//         surname = fullName[0];
//       }
//       if (fullName[1][0] === fullName[1][0].toUpperCase()) {
//         name = fullName[1];
//       }
//       if (fullName[2][0] === fullName[2][0].toUpperCase()) {
//         fatherName = fullName[2];
//       }
//     }
//   };
//   return {
//     getName,
//     getSurname,
//     getFatherName,
//     getAge,
//     getFullName,
//     setAge,
//     setFatherName,
//     setFullName,
//     setName,
//     setSurname,
//   };
// };
// const a = createPersonClosure("Вася", "Пупкін");
// const b = createPersonClosure("Ганна", "Іванова");
// console.log(a.getName());
// a.setAge(15);
// a.setAge(150); //не працює

// b.setFullName("Петрова Ганна Миколаївна");
// console.log(b.getFatherName()); //Миколаївна

// CREATE PERSON CLOSURE DESTRUCT !!!

// const createPersonClosureDestruct = ({
//   name = "Dima",
//   surname = "Blokhin",
//   fatherName = "Igorovich",
//   age = 24,
// }) => {
// 	return {
// 		name,
// 		surname,
// 		fatherName,
// 		age
// 	}
// };

// const a = createPersonClosureDestruct(createPerson("Вася Пупкін"))
// const b = createPersonClosureDestruct({name: 'Миколай', age: 75})

// 	IS SORTED !!!

// const isSorted = (...params) => {
//   for (let i = 0; i <= params.length - 1; i++) {
//     if (typeof params[i] !== "number" || params[i] <= params[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isSorted(1, 2, 3, 4, 5));
// console.log(isSorted(1, 2, 1, 3, 4));
// console.log(isSorted(1, 2, 2, "a", 1, 22));

// TEST IS SORTED !!!

// function isSorted(...parameters) {
//   for (let i = 0; i < parameters.length - 1; i++) {
//     if (parameters[i] > parameters[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// let arr = [];

// while (true) {
//   let input = prompt("Введіть число");

//   if (input === null) {
//     break;
//   }

//   arr.push(Number(input));
// }

// console.log(arr);
// console.log(isSorted(...arr));

// PERSON FORM !!! ????????????

const personForm = (parent, person) => {
	const nameInput = document.createElement("input")
	nameInput.value = person.getName()
	parent.appendChild(nameInput)
	const surnameInput = document.createElement("input")
	parent.appendChild(surnameInput)
	const fatherNameInput = document.createElement("input")
	parent.appendChild(fatherNameInput)
	const ageInput = document.createElement("input")
	parent.appendChild(ageInput)
	const fullNameInput = document.createElement("input")
	parent.appendChild(fullNameInput)
}
