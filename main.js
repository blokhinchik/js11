function createStore(reducer) {
  let state = reducer(undefined, {});
  let cbs = [];

  const getState = () => state;
  const subscribe = (cb) => (
    cbs.push(cb), () => (cbs = cbs.filter((c) => c !== cb))
  );

  const dispatch = (action) => {
    const newState = reducer(state, action);
    if (newState !== state) {
      state = newState;
      for (let cb of cbs) cb();
    }
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
}

function reducer(state, { type, item, amount, money }) {
  if (!state) {
    return {
      products: {
        dreamAboutEating: { quantity: 100, price: 25 },
        dreamAboutTrip: { quantity: 100, price: 125 },
        dreamAboutBigLove: { quantity: 100, price: 250 },
      },

      cash: 10000,
    };
  }

  if (type === "КУПИТИ") {
    const product = state.products[item];

    if (product.quantity < amount && amount * product.price > money) {
      console.log(
        " Здаеться менi,що у вас недостатньо коштiв, а у нас снiв. Тож приходь завтра."
      );
      return state;
    }

    if (product.quantity < amount) {
      console.log("В нашому магазині закінчилися сни.");
      return state;
    }
    if (amount * product.price > money) {
      console.log("У вас недостатньо коштiв.");
      return state;
    }

    // product.quantity -= amount;

    return {
      ...state,
      products: {
        ...state.products,
        [item]: {
          ...state.products[item],
          quantity: state.products[item].quantity - amount
        }
      },
      // state.products[item] : {...state.products[item], state.products[item].quantity -= amount;},
      cash: state.cash + money,
    };
  }

  return state;
}

function makeStore(state) {
  const storeDiv = document.getElementById("store");

  const partOne = document.getElementById("partOne");

  const selectDream = document.getElementById("product-select");

  for (const product in state.products) {
    const productDiv = document.createElement("div");

    productDiv.style.width = "150px";
    productDiv.style.padding = "25px";
    productDiv.style.margin = "25px";
    productDiv.style.display = "flex";

    productDiv.style.flexDirection = "column";
    productDiv.style.alignItems = "center";
    productDiv.style.border = "1px solid green";
    productDiv.style.borderRadius = "10px";

    const nameP = document.createElement("div");
    nameP.innerText = product;
    productDiv.append(nameP);

    const quantityP = document.createElement("div");
    quantityP.innerText = `В наличии: ${state.products[product].quantity}`;
    quantityP.id = `quantity-${product}`;
    productDiv.append(quantityP);

    const priceP = document.createElement("div");
    priceP.innerText = `Цена: ${state.products[product].price}`;
    productDiv.append(priceP);

    partOne.prepend(productDiv);

    const optionDream = document.createElement("option");
    optionDream.value = product;
    optionDream.text = product;
    selectDream.append(optionDream);
  }

  const buyButton = document.getElementById("buy-button");
  const productSelect = document.getElementById("product-select");
  const amountInput = document.getElementById("amount-input");
  const moneyInput = document.getElementById("money-input");

  buyButton.onclick = () => {
    const item = productSelect.value;
    const amount = parseInt(amountInput.value);
    const money = parseInt(moneyInput.value);

    const action = { type: "КУПИТИ", item, amount, money };
    store.dispatch(action);

    const updatedState = store.getState();

    const quantityP = document.getElementById(`quantity-${item}`);
    quantityP.innerText = `В наличии: ${updatedState.products[item].quantity}`;

    document.title = `Касса : ${updatedState.cash}`;
  };
}

// проверка

const store = createStore(reducer);
makeStore(store.getState());

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));