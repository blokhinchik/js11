// PERSON CONSTRUCTOR !!!

// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
//   this.getFullName = () => {
//     return this.name + " " + this.surname + " " + this.fatherName;
//   };
// }
// const a = new Person("Вася", "Пупкін");
// const b = new Person("Ганна", "Іванова");
// const c = new Person("Єлизавета", "Петрова");

// console.log(a.getFullName()); // Василь Пупкін
// a.fatherName = "Іванович"; // Василь Іванович Пупкін
// console.log(a.getFullName());

// console.log(b.getFullName()); // Ганна Іванова

// PERSON PROTOTYPE !!!

// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
//   Person.prototype.getFullName = function () {
//     return this.name + " " + this.surname + " " + this.fatherName;
//   };
// }
// const a = new Person("Вася", "Пупкін");
// const b = new Person("Ганна", "Іванова");
// const c = new Person("Єлизавета", "Петрова");

// console.log(a.getFullName()); // Василь Пупкін
// a.fatherName = "Іванович"; // Василь Іванович Пупкін
// console.log(a.getFullName());

// console.log(b.getFullName()); // Ганна Іванова

// PASSWORD !!!

// function Password(parent, open) {
//   const input = document.createElement("input");
//   input.type = "password";
//   parent.append(input);

//   const toggle = document.createElement("button");
//   toggle.innerText = "Open";
//   parent.append(toggle);

//   value = "";
//   isOpen = open;

//   this.setValue = (newValue) => {
//     value = newValue;
//     input.value = value;
//   };
//   this.getValue = () => {
//     return input.value;
//   };
//   this.setOpen = (newOpen) => {
//     isOpen = newOpen;
//     if (isOpen) {
//       toggle.innerText = "Open";
//       input.type = "text";
//     } else {
//       toggle.innerText = "Hide";
//       input.type = "password";
//     }
//     this.getOpen = () => {
//       return isOpen;
//     };
//   };
//   input.oninput = () => {
//     value = input.value;
//     this.onChange(value);
//   };
//   toggle.onclick = () => {
//     isOpen = !isOpen;
//     if (isOpen) {
//       toggle.innerText = "Open";
//       input.type = "text";
//     } else {
//       toggle.innerText = "Hide";
//       input.type = "password";
//     }
//     this.onOpenChange(isOpen);
//   };
// }

// let p = new Password(document.body, true);

// p.onChange = (data) => console.log(data); //буде корисно при виконаннi LoginForm та Password Verify
// p.onOpenChange = (open) => console.log(open);

// p.setValue("qwerty");
// console.log(p.getValue());

// p.setOpen(false);
// console.log(p.getOpen());

