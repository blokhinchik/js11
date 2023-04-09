// WHILE CONFIRM !!!

let text = false;
while (!text) {
  text = confirm("Желаете продолжить?");
  if (text) {
    alert("Вы нажали на ОК");
  }
}
console.log("Цикл закончился!");

// ARRAY FILL !!!

const arr5 = [];
while (true) {
  let input = prompt();
  if (input === null) {
    break;
  }
  arr5.push(input);
}
console.log(arr5);

// ARRAY FILL NOPUSH !!!

const array = [];
for (let i = 0; i <= array.length; i++) {
  let text = prompt();
  if (text === null) {
    break;
  }
  array[i] = text;
}
console.log(array);

// INFINITE PROBABILITY !!!

let i = 0;
for (i; i <= Infinity; i++) {
  let random = Math.random();
  if (random > 0.9) {
    break;
  }
}
alert(i);

// EMPTY LOOP !!!

let prom = prompt("Message", "");
while (true) {
  if (prom === null) {
    prom = prompt("Message", "");
  } else if (prom === "" || typeof prom === "string") {
    break;
  }
}

// PROGRESSION SUM !!!

let progression = prompt();
for (let i = 1; i <= progression; i += 3) {
  console.log(i);
}

// CHESS ONE LINE !!!

const howManyRows = prompt();
for (let i = 0, row = ""; i <= howManyRows; i++, row += "# ") {
  console.log(row);
}

// NUMBERS !!!

let str = "";
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    str += j;
  }
  str += "\n";
}
console.log(str);

// CHESS !!!

const height = prompt("Введите высоту доски: ", "");
const width = prompt("Введите ширину доски: ", "");
let rows = "";
for (let i = 0; i <= height; i++) {
  for (let j = 0; j <= width; j++) {
    if (i % 2) {
      rows += "#.";
    } else {
      rows += ".#";
    }
  }
  rows += "\n";
}

console.log(rows);

// CUBES !!!

const arr = [];
const arrLength = prompt("Введи длину массива: ");
for (let i = 0; i <= arrLength; i++) {
  arr.push(i ** 3);
}
console.log(arr);

// MULTIPLE TABLE !!!

let arr1 = [];
for (let i = 0; i <= 10; i++) {
  arr1[i] = [];
  for (let j = 0; j <= 10; j++) {
    arr1[i][j] = i * j;
  }
}
console.log(arr1);

// READ ARRAY OF OBJECT !!!

const readArrayOfObjects = () => {
  const arr2 = [];
  let counting = true;
  while (counting) {
    const obj = {};
    let objCreating = true;
    while (objCreating) {
      const key = prompt("Введите название ключа");
      if (key === null) {
        objCreating = false;
        continue;
      }
      const value = prompt(`Введите значение к ${key}`);
      if (value === null) {
        objCreating = false;
        continue;
      }
      obj[key] = value;
    }
    arr2.push(obj);
    counting = confirm("Бажаєте створити ще один об'єкт?");
  }
  return arr2;
};
const arr3 = readArrayOfObjects();
console.log(arr3);

// РОМБИК !!!

const size = prompt("Введите размеры ромбика: ");
let romb = "";
for (let i = 0; i <= size; i++) {
  for (let j = 0; j <= size; j++) {
    if (i <= size / 2) {
      if (j < size / 2 - i + 1) {
        romb += ".";
      } else if (j > size / 2 + i) {
        romb += ".";
      } else {
        romb += "#";
      }
    } else {
      if (j < i - size / 2) {
        romb += ".";
      } else if (j > size - (i - size / 2) + 1) {
        romb += ".";
      } else {
        romb += "#";
      }
    }
  }
  romb += `\n`;
}
console.log(romb);

// DOM: MULTIPLY TABLE !!!

const table = document.createElement("table");
for (let i = 0; i < 9; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < 9; j++) {
    const td = document.createElement("td");
    if (i > 0 && j > 0) {
      number = i * j;
    } else if (i === 0) {
      number = j;
    } else {
      number = i;
    }
    td.innerText = number;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
document.body.append(table);

const cells = document.querySelectorAll("td");
for (const cell of cells) {
  cell.onmouseover = (event) => {
    for (let i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];
      row.cells[cell.cellIndex].style.backgroundColor = "green";
    }
    event.target.style.backgroundColor = "grey";
    event.target.parentNode.style.backgroundColor = "orange";
  };
  cell.onmouseout = (event) => {
    for (let i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];
      row.cells[cell.cellIndex].style.backgroundColor = "";
    }
    event.target.style.backgroundColor = "";
    event.target.parentNode.style.backgroundColor = "";
  };
}
