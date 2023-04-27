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

// const passwordInput = new Password(document.body, false);

// passwordInput.onChange = (data) => console.log(data); //буде корисно при виконаннi LoginForm та Password Verify
// passwordInput.onOpenChange = (open) => console.log(open);

// passwordInput.setValue("qwerty");
// console.log(passwordInput.getValue());

// passwordInput.setOpen(false);
// console.log(passwordInput.getOpen());

// LOGIN FORM !!!

// const container = document.createElement("div");
// document.body.append(container);

// const loginInput = document.createElement("input");
// loginInput.type = "text";
// loginInput.placeholder = "LOGIN";
// loginInput.oninput = () => {
//   disabledSubmit();
// };
// container.append(loginInput);

// const passwordInput = new Password(container, true);
// passwordInput.onChange = () => {
//   disabledSubmit();
// };

// const submitButton = document.createElement("button");
// submitButton.type = "submit";
// submitButton.innerText = "Отправить";
// submitButton.disabled = true;
// submitButton.onclick = () => {
//   console.log(
//     `Your data has been successfully sent: ${
//       loginInput.value
//     } ${passwordInput.getValue()}`
//   );
//   loginInput.value = "";
//   passwordInput.setValue("");
//   disabledSubmit();
// };
// disabledSubmit();
// container.append(submitButton);

// function disabledSubmit() {
//   if (loginInput.value.length < 1 || passwordInput.getValue().length < 1) {
//     submitButton.disabled = true;
//   } else {
//     submitButton.disabled = false;
//   }
// }

// LOGIN FORM CONSTRUCTOR !!!

// function LoginForm(parent, open) {
//   const loginInput = document.createElement("input");
//   loginInput.type = "text";
//   loginInput.placeholder = "User Name";
//   loginInput.oninput = () => {
//     this.disabledButton();
//   };
//   parent.append(loginInput);

//   const passwordInput = new Password(parent, open);
//   passwordInput.onChange = () => {
//     this.disabledButton();
//   };

//   const submitButton = document.createElement("button");
//   submitButton.type = "submit";
//   submitButton.innerText = "Отправить";
//   submitButton.onclick = () => {
//     console.log(
//       `Your data has been successfully sent: ${this.getLogin()} ${passwordInput.getValue()}`
//     );
//     this.setLogin("");
//     passwordInput.setValue("");
//     this.disabledButton();
//   };
//   parent.append(submitButton);

//   this.getLogin = () => {
//     return loginInput.value;
//   };

//   this.setLogin = (newLogin) => {
//     loginInput.value = newLogin;
//   };

//   this.disabledButton = () => {
//     if (this.getLogin().length < 1 || passwordInput.getValue().length < 1) {
//       submitButton.disabled = true;
//     } else {
//       submitButton.disabled = false;
//     }
//   };
//   this.disabledButton();
// }

// const container = document.createElement("div");
// document.body.append(container);
// const formNew = new LoginForm(container, false);

// PASSWORD VERIFY !!! не сделал!!!!
