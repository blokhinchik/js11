// BLOCKS !!!

let a = 10;
{
  let b = 20;
  {
    let c = 30;
    //які тут будуть значення змінних a, b, c, d  a = 100, b = 21, c = 30, d = is not defined

    b++;
    a *= 10;
  }
  {
    let c = 50;
    //які тут будуть значення змінних a, b, c, d  a = 100, b = 521, c = 50, d = is not defined
    b += 500;
  }
  {
    const a = 100500;
    const d = "value";
    //які тут будуть значення змінних a, b, c, d  a = 100500, d = "value", c = is not defined, b = 521
    {
      let a = -50;
      b = 1000;
      //які тут будуть значення змінних a, b, c, d  a = -50, b = 1000, c = is not defined, d = "value"
    }
    //які тут будуть значення змінних a, b, c, d a = 100500, b = (1000?), c = is not defined, d = "value"
  }
  //які тут будуть значення змінних a, b, c, d a = (10?), b = (20?), c = is not defined, d = is nor defined
}
//які тут будуть значення змінних a, b, c, d a = (10?), b = is not defined, c = is not defined, d = is not defined

// COMPARISON IF !!!

const age = +prompt("Скільки вам років?");
if (age < 0) {
  alert("Это какая-то дичь!");
} else if (age < 18) {
  alert("школяр");
} else if (age < 30) {
  alert("молодь");
} else if (age < 45) {
  alert("зрілість");
} else if (age < 60) {
  alert("захід сонця");
} else {
  alert("як пенсія?");
}

// SWITCH: SIZES !!!

const sizes = prompt("Какой размер вы хотите перевести?");
switch (sizes) {
  case "40":
    alert("8");
    break;
  case "42":
    alert("10");
    break;
  case "44":
    alert("12");
    break;
  case "46":
    alert("14");
    break;
  case "48":
    alert("16");
    break;
  case "50":
    alert("18");
    break;
  case "52":
    alert("20");
    break;
  case "54":
    alert("22");
    break;
  default:
    alert("Введи нормально!");
}

// SWITCH IF !!!

const color = prompt("Введіть колір");

if (color === "red") {
  document.write("<div style='background-color: red;'>червоний</div>");
  document.write(
    "<div style='background-color: black; color: white;'>чорний</div>"
  );
} else if (color === "black") {
  document.write(
    "<div style='background-color: black; color: white;'>чорний</div>"
  );
} else if (color === "blue") {
  document.write("<div style='background-color: blue;'>синій</div>");
  document.write("<div style='background-color: green;'>зелений</div>");
} else if (color === "green") {
  document.write("<div style='background-color: green;'>зелений</div>");
} else {
  document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
}

// NOSWITCH !!!

const noSwitch = (key, cases, defaultKey = "default") => {
  (cases[key] || cases[defaultKey])();
};

const drink = prompt("Що ви любите пити");
noSwitch(drink, {
  воду: () => console.log("Найздоровіший вибір!"),
  чай: () => console.log("Смачна та корисна штука. Не перестарайтеся з цукром"),
  пиво: () => console.log("Добре влітку, та в міру"),
  віскі: () => console.log("Та ви, батечку, естет! Не забудьте лід і сигару"),
  default: () => console.log("шото я не зрозумів"),
});

// CLOSURE CALC !!!

fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    const container = document.createElement("div");
    container.setAttribute("id", "currency-buttons");
    for (const key in data.rates) {
      const button = document.createElement(`button`);
      button.innerText = key;
      button.onclick = () => {
        const sum = prompt("Введите сумму: ");
        const rates = data.rates[key];
        const result = sum / rates;
        alert(`${sum} ${key} в эквиваленте ${result.toFixed(1)} USD`);
      };
      container.append(button);
    }
    document.body.append(container);
  });

// CLOSURE CALC 2 !!!

fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    const selectFrom = document.createElement("select");
    selectFrom.setAttribute("id", "from");

    const selectTo = document.createElement("select");
    selectTo.setAttribute("id", "to");

    const divRate = document.createElement("div");
    divRate.setAttribute("id", "rate");

    const inpAmount = document.createElement("input");
    inpAmount.setAttribute("id", "amount");
    inpAmount.setAttribute("type", "number");

    const divResult = document.createElement("div");
    divResult.setAttribute("id", "result");

    for (const key in data.rates) {
      const option = document.createElement("option");
      option.innerText = key;
      selectFrom.append(option);
    }
    for (const key in data.rates) {
      const option = document.createElement("option");
      option.innerText = key;
      selectTo.append(option);
    }
    selectFrom.onchange = () => {
      const from = selectFrom.value;
      const to = selectTo.value;
      const rate = data.rates[to] / data.rates[from];
      divRate.innerText = `1 ${from} = ${rate.toFixed(2)} ${to}`;
    };
    selectTo.onchange = () => {
      const from = selectFrom.value;
      const to = selectTo.value;
      const rate = data.rates[to] / data.rates[from];
      divRate.innerText = `1 ${from} = ${rate.toFixed(2)} ${to}`;
    };
    inpAmount.oninput = () => {
      const from = selectFrom.value;
      const to = selectTo.value;
      const rate = data.rates[to] / data.rates[from];
      const amount = inpAmount.value;
      const result = amount * rate;
      divResult.innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
    };
    document.body.append(selectFrom);
    document.body.append(selectTo);
    document.body.append(divRate);
    document.body.append(inpAmount);
    document.body.append(divResult);
  });

// COUNTRIES AND CITIES !!!

fetch(
  "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json"
)
  .then((res) => res.json())
  .then((data) => {
    const countries = Object.keys(data);
    const selectCountries = document.createElement("select");
    selectCountries.setAttribute("id", "countries");

    const selectCities = document.createElement("select");
    selectCities.setAttribute("id", "cities");

    for (const key of countries) {
      const option = document.createElement("option");
      option.innerText = key;
      selectCountries.append(option);
    }
    selectCountries.onchange = () => {
      selectCities.innerText = "";
      const cities = data[selectCountries.value];
      for (const city of cities) {
        const cities = document.createElement("option");
        cities.innerText = city;
        selectCities.append(cities);
      }
    };

    document.body.append(selectCountries);
    document.body.append(selectCities);
  });
