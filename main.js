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

const createPersonClosure = (name, surname) => {
  let age;
  let fatherName;
  const getName = () => {
    return name;
  };
  const getSurname = () => {
    return surname;
  };
  const getFatherName = () => {
    return fatherName;
  };
  const getAge = () => {
    return age;
  };
  const getFullName = () => {
    return `${name}  ${surname}  ${fatherName}`;
  };
  const setName = (newName) => {
    if (
      typeof newName === "string" &&
      newName[0] === newName[0].toUpperCase()
    ) {
      name = newName;
    }
    return name;
  };
  const setSurname = (newSurname) => {
    if (
      typeof newSurname === "string" &&
      newSurname[0] === newSurname[0].toUpperCase()
    ) {
      surname = newSurname;
    }
    return surname;
  };
  const setFatherName = (newFatherName) => {
    if (
      typeof newFatherName === "string" &&
      newFatherName[0] === newFatherName[0].toUpperCase()
    ) {
      fatherName = newFatherName;
    }
    return fatherName;
  };
  const setAge = (newAge) => {
    if (newAge > 0 && newAge <= 100) {
      age = Number(newAge);
    }
    return age;
  };
  const setFullName = (newFullName) => {
    if (typeof newFullName === "string") {
      const fullName = newFullName.split(" ");
      if (fullName.length === 3) {
        if (fullName[0][0] === fullName[0][0].toUpperCase()) {
          name = fullName[0];
        }
        if (fullName[1][0] === fullName[1][0].toUpperCase()) {
          surname = fullName[1];
        }
        if (fullName[2][0] === fullName[2][0].toUpperCase()) {
          fatherName = fullName[2];
        }
      } else {
        return newFullName;
      }
    }
  };
  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setAge,
    setFatherName,
    setFullName,
    setName,
    setSurname,
  };
};
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

// PERSON FORM !!!

const divParent = document.getElementById("divParent");
const test = createPersonClosure();
test.setAge(24);
test.setFullName("Блохин Дмитрий Игорович");

// const personForm = (parent, person) => {
//   const inputName = document.createElement("input");
//   inputName.value = person.getName();
//   inputName.type = "text";
//   inputName.placeholder = "Name";
//   inputName.oninput = () => {
//     const name = person.setName(inputName.value);
//     inputName.value = name;
//   };
//   parent.append(inputName);

//   const inputSurname = document.createElement("input");
//   inputSurname.type = "text";
//   inputSurname.value = person.getSurname();
//   inputSurname.oninput = () => {
//     const surname = person.setSurname(inputSurname.value);
//     inputSurname.value = surname;
//   };
//   parent.append(inputSurname);

//   const inputFatherName = document.createElement("input");
//   inputFatherName.value = person.getFatherName();
//   inputFatherName.type = "text";
//   inputFatherName.oninput = () => {
//     const fatherName = person.setFatherName(inputFatherName.value);
//     inputFatherName.value = fatherName;
//   };
//   parent.append(inputFatherName);

//   const inputAge = document.createElement("input");
//   inputAge.value = person.getAge();
//   inputAge.type = "number";
//   inputAge.oninput = () => {
//     const age = person.setAge(inputAge.value);
//     inputAge.value = age;
//   };
//   parent.append(inputAge);

//   const inputFullName = document.createElement("input");
//   inputFullName.value = person.getFullName();
//   inputFullName.type = "text";
//   inputFullName.oninput = () => {
// 		person.setFullName(inputFullName.value);
//     inputFullName.value = person.getFullName();
//     inputName.value = person.getName();
//     inputSurname.value = person.getSurname();
//     inputFatherName.value = person.getFatherName();
//   };
//   parent.append(inputFullName);
// };

// personForm(divParent, test);

// GETSETFORM !!!

//getSetForm

function getSetForm(parent, object) {
  let register = {};
  const updateInputs = () => {
    for (key in register) {
      const getKey = `get` + key;
      if (getKey in object) {
        let getValue = object[getKey]();
        register[key].value = getValue;
      }
    }
  };
  for (func in object) {
    const isGet = func.startsWith("get");
    const fieldName = func.slice(3);
    const setKey = `set` + fieldName;
    const getKey = `get` + fieldName;
    if (isGet) {
      const input = document.createElement("input");
      const type = typeof object[getKey]();
      if (type === "boolean") {
        input.type = "checkbox";
      } else if (type === "number") {
        input.type = "number";
      } else {
        input.type = "text";
      }
      if (!(setKey in object)) {
        input.disabled = true;
      }
      input.placeholder = `${fieldName}`;
      input.oninput = () => {
        object[setKey](input.value);
        input.value = object[getKey]();
        updateInputs();
      };

      parent.appendChild(input);
      register[fieldName] = input;
    }
  }
  updateInputs();
}

let car;
{
  let brand = "BMW",
    model = "X5",
    volume = 2.4;
  car = {
    getBrand() {
      return brand;
    },
    setBrand(newBrand) {
      if (newBrand && typeof newBrand === "string") {
        brand = newBrand;
      }
      return brand;
    },

    getModel() {
      return model;
    },
    setModel(newModel) {
      if (newModel && typeof newModel === "string") {
        model = newModel;
      }
      return model;
    },

    getVolume() {
      return volume;
    },
    setVolume(newVolume) {
      newVolume = +newVolume;
      if (newVolume && newVolume > 0 && newVolume < 20) {
        volume = newVolume;
      }
      return volume;
    },

    getTax() {
      return volume * 100;
    },
  };
}

const testDiv = document.getElementById("testdiv");
const testDiv2 = document.getElementById("testdiv2");

getSetForm(formDiv, test);
getSetForm(testDiv, createPersonClosure("Анон", "Анонов"));
getSetForm(testDiv2, car);
