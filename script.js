// Number: odd
// let str = prompt("Введите число: ");
// let num = +str;
// if (num % 2 === 0) {
//   alert("Число парное");
// } else if (num % 2 >= 1) {
//   alert("Число не парное");
// } else {
//   alert("Введите цифры!!!");
// }

// String: lexics
// const lexics = prompt("Write text: ");
// const incl = lexics.includes("fuck");
// if (incl) {
//   alert("You wrote a bad word");
// } else {
//   alert(lexics);
// }

// Boolean
// const yesNo = confirm("Как твой день?")
//   ? confirm("Дали зарплату что ли?))")
//     ? "Супер"
//     : "Жаль"
//   : confirm("Шеф говно?))")
//   ? "я так и знал"
//   : "Странно";
// console.log(yesNo);

// Boolean: if
// const sex = confirm("Your gender");
// if (sex) {
//   let maleFemale = confirm("are you male?");
//   if (maleFemale) {
//     alert("you are male");
//   } else {
//     alert("you are female");
//   }
// } else {
//   alert("Go sleep!");
// }

// Comparison: sizes
// const sizes = prompt("Введите свои размеры и получите размеры Великобритании");
// const num = +sizes;
// if (num === 40) {
//   alert("Это будет - 8");
// } else if (num === 42) {
//   alert("Это будет - 10");
// } else if (num === 44) {
//   alert("Это будет - 12");
// } else if (num === 46) {
//   alert("Это будет - 14");
// } else if (num === 48) {
//   alert("Это будет - 16");
// } else if (num === 50) {
//   alert("Это будет - 18");
// } else if (num === 52) {
//   alert("Это будет - 20");
// } else if (num === 54) {
//   alert("Это будет - 22");
// } else {
//   alert("Ты ввёл какую-то дичь :D");
// }

//Ternary
// const sex = confirm("Ви чоловік?")
//   ? alert("Вітаю, вам дуже пощастило і ви народились чоловіком")
//   : confirm("Ви жінка?")
//   ? alert("Ну жінкой бути теж нічого")
//   : alert("Тоді хто ж ти");

//Prompt: or
// const age = prompt("Скільки вам років?");
// const isAdult = +age;
// !isAdult || isAdult === ""
//   ? alert("Некоректне введення!")
//   : alert(`Ваш вік: ${userAge}`);

// Confirm: or this days
// let str = confirm("шопінг?" ) || alert("ти-бяка");

// Confirm: if this days
// let shopp = confirm("шопінг?");
// if (!shopp) {
//   alert("ти - бяка!");
// } else {
//   alert("Супер!");
// }

// Default: or
// const firstName = prompt("Введіть ваше ім'я:") || "Іван";
// const lastName = prompt("Введіть ваше прізвище:") || "Іванов";
// const middleName = prompt("Введіть ваше по батькові:") || "Іванович";
// console.log(firstName, lastName, middleName);

// Default: if
// let firstName = prompt("Введіть ваше ім'я:");
// let lastName = prompt("Введіть ваше прізвище:");
// let middleName = prompt("Введіть ваше по батькові:");
// if (!firstName) {
//   firstName = "Iван";
// }
// if (!lastName) {
//   lastName = "Iванов";
// }
// if (!middleName) {
//   middleName = "Iванович";
// }
// console.log(`${firstName} ${lastName} ${middleName}`);

// Login and password
// const login = prompt("Введите логин: ");
// if (login != "admin") {
//   alert("ошибка");
// }
// const password = prompt("Введите пароль: ");
// if (password != "qwerty") {
//   alert("ошибка");
// }
// if (login == "admin" && password == "qwerty") {
//   alert("Поздравляю!!!");
// }

//Currency exchange

// Scissors
// let userChoice = prompt("Введите ваш выбор: камень, ножницы или бумага");
// let computerChoice = Math.random();
// if (computerChoice < 0.33) {
//   computerChoice = "камень";
// } else if (computerChoice < 0.66) {
//   computerChoice = "ножницы";
// } else {
//   computerChoice = "бумага";
// }

// alert("Ваш выбор: " + userChoice);
// alert("Выбор компьютера: " + computerChoice);

// if (userChoice === computerChoice) {
//   alert("Ничья!");
// } else if (
//   (userChoice === "камень" && computerChoice === "ножницы") ||
//   (userChoice === "ножницы" && computerChoice === "бумага") ||
//   (userChoice === "бумага" && computerChoice === "камень")
// ) {
//   alert("Вы победили!");
// } else {
//   alert("Компьютер победил!");
// }

const exercise = prompt("Введите название задания: ");
if (exercise === "Number: odd") {
  let str = prompt("Введите число: ");
  let num = +str;
  if (num % 2 === 0) {
    alert("Число парное");
  } else if (num % 2 >= 1) {
    alert("Число не парное");
  } else {
    alert("Введите цифры!!!");
  }
} else if (exercise === "String: lexics") {
  const lexics = prompt("Write text: ");
  const incl = lexics.includes("fuck");
  if (incl) {
    alert("You wrote a bad word");
  } else {
    alert(lexics);
  }
} else if (exercise === "Boolean") {
  const yesNo = confirm("Как твой день?")
    ? confirm("Дали зарплату что ли?))")
      ? "Супер"
      : "Жаль"
    : confirm("Шеф говно?))")
    ? "я так и знал"
    : "Странно";
  console.log(yesNo);
} else if (exercise === "Boolean: if") {
  const sex = confirm("Your gender");
  if (sex) {
    let maleFemale = confirm("are you male?");
    if (maleFemale) {
      alert("you are male");
    } else {
      alert("you are female");
    }
  } else {
    alert("Go sleep!");
  }
} else if (exercise === "Comparison: sizes") {
  const sizes = prompt(
    "Введите свои размеры и получите размеры Великобритании"
  );
  const num = +sizes;
  if (num === 40) {
    alert("Это будет - 8");
  } else if (num === 42) {
    alert("Это будет - 10");
  } else if (num === 44) {
    alert("Это будет - 12");
  } else if (num === 46) {
    alert("Это будет - 14");
  } else if (num === 48) {
    alert("Это будет - 16");
  } else if (num === 50) {
    alert("Это будет - 18");
  } else if (num === 52) {
    alert("Это будет - 20");
  } else if (num === 54) {
    alert("Это будет - 22");
  } else {
    alert("Ты ввёл какую-то дичь :D");
  }
} else if (exercise === "Ternary") {
  const sex = confirm("Ви чоловік?")
    ? alert("Вітаю, вам дуже пощастило і ви народились чоловіком")
    : confirm("Ви жінка?")
    ? alert("Ну жінкой бути теж нічого")
    : alert("Тоді хто ж ти");
} else if (exercise === "Prompt: or") {
  const age = prompt("Скільки вам років?");
  const isAdult = +age;
  !isAdult || isAdult === ""
    ? alert("Некоректне введення!")
    : alert(`Ваш вік: ${userAge}`);
} else if (exercise === "Confirm: if this days") {
  let shopp = confirm("шопінг?");
  if (!shopp) {
    alert("ти - бяка!");
  } else {
    alert("Супер!");
  }
} else if (exercise === "Confirm: or this days") {
  let str12 = confirm("шопінг?") || alert("ти-бяка");
} else if (exercise === "Default: or") {
  const firstName = prompt("Введіть ваше ім'я:") || "Іван";
  const lastName = prompt("Введіть ваше прізвище:") || "Іванов";
  const middleName = prompt("Введіть ваше по батькові:") || "Іванович";
  console.log(firstName, lastName, middleName);
} else if (exercise === "Default: if") {
  let firstName = prompt("Введіть ваше ім'я:");
  let lastName = prompt("Введіть ваше прізвище:");
  let middleName = prompt("Введіть ваше по батькові:");
  if (!firstName) {
    firstName = "Iван";
  }
  if (!lastName) {
    lastName = "Iванов";
  }
  if (!middleName) {
    middleName = "Iванович";
  }
  console.log(`${firstName} ${lastName} ${middleName}`);
} else if (exercise === "Login and password") {
  const login = prompt("Введите логин: ");
  if (login != "admin") {
    alert("ошибка");
  }
  const password = prompt("Введите пароль: ");
  if (password != "qwerty") {
    alert("ошибка");
  }
  if (login == "admin" && password == "qwerty") {
    alert("Поздравляю!!!");
  }
} else if (exercise === "Scissors") {
  let userChoice = prompt("Введите ваш выбор: камень, ножницы или бумага");
  let computerChoice = Math.random();
  if (computerChoice < 0.33) {
    computerChoice = "камень";
  } else if (computerChoice < 0.66) {
    computerChoice = "ножницы";
  } else {
    computerChoice = "бумага";
  }

  alert("Ваш выбор: " + userChoice);
  alert("Выбор компьютера: " + computerChoice);

  if (userChoice === computerChoice) {
    alert("Ничья!");
  } else if (
    (userChoice === "камень" && computerChoice === "ножницы") ||
    (userChoice === "ножницы" && computerChoice === "бумага") ||
    (userChoice === "бумага" && computerChoice === "камень")
  ) {
    alert("Вы победили!");
  } else {
    alert("Компьютер победил!");
  }
}
