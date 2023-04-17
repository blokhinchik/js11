// MAKE PROFILE TIMER !!!

// const makeProfileTimer = () => {
//   const start = performance.now();
//   return function () {
//     const end = performance.now();
//     const milToSec = (end - start) / 1000;
//     return `${milToSec.toFixed(1)} second`;
//   };
// };

// const timer = makeProfileTimer();
// alert("Вимiрюємо час роботи цього alert"); //якийсь код, час виконання якого ми хочемо виміряти з високою точністю
// alert(timer()); //alert повинен вивести час у мікросекундах від виконання makeProfileTimer до моменту виклику timer(),
// // тобто виміряти час виконання alert
// const timer2 = makeProfileTimer();
// prompt("");
// alert(`Час роботи двух аlert та одного prompt ${timer()}`);
// alert(`Час роботи prompt та попереднього alert ${timer2()}`);

// MAKE SAVER !!!

// const makeSaver = (func) => {
//   let result;
//   return function () {
//     if (!result) {
//       result = func();
//     }
//     return result;
//   };
// };

// var saver = makeSaver(Math.random);
// var value1 = saver();

// MY BIND !!!

// const myBind = (fn, context, defaultArgs) => {
//   return function boundFunc(...args) {
//     const newArgs = [];
//     for (let i = 0; i < defaultArgs.length; i++) {
//       if (typeof defaultArgs[i] === "undefined") {
//         if (args.length > 0) {
//           newArgs.push(args.shift());
//         }
//       } else {
//         newArgs.push(defaultArgs[i]);
//       }
//     }
//     return fn.apply(context, newArgs.concat(args));
//   };
// };

// var pow5 = myBind(Math.pow, Math, [, 5]);

// CHECK RESULT !!!

const checkResult = (original, validator) => {
  function wrapper(...params) {
    let result;
    while (true) {
      result = original.call(this, ...params);
      if (validator(result)) {
        return result;
      }
    }
  }
  return wrapper;
};

const RandomHigh = checkResult(Math.random, (x) => x >= 0.5 && x <= 1);
const AlwaysSayYes = checkResult(confirm, (x) => x);
const respectMe = checkResult(prompt, (x) => {if(x === null){
	return prompt()
}else{
	x.trim().length > 0
}
});
