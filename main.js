// СВЕТОФОР !!!

const delay = (ms) => new Promise((ok) => setTimeout(() => ok(ms), ms));

// async function trafficLight(){
//   while (true){
// 		document.getElementById('green').style.backgroundColor = '#5cb85c'
// 		document.getElementById('yellow').style.backgroundColor = ''
// 		document.getElementById('red').style.backgroundColor = ''
// 		await delay(5000)
// 		document.getElementById('green').style.backgroundColor = ''
// 		document.getElementById('yellow').style.backgroundColor = '#f0ad4e'
// 		document.getElementById('red').style.backgroundColor = ''
// 		await delay(1500)
// 		document.getElementById('green').style.backgroundColor = ''
// 		document.getElementById('yellow').style.backgroundColor = ''
// 		document.getElementById('red').style.backgroundColor = '#d9534f'
// 		await delay(4000)
// }
// }

// trafficLight();

// PedestrianTrafficLight !!!

// const red = document.createElement("div");
// red.style.width = "40px";
// red.style.height = "40px";
// red.style.border = "1px solid black";
// red.style.borderRadius = "50%";
// red.style.marginBottom = "5px";
// red.style.position = "relative";

// const green = document.createElement("div");
// green.style.width = "40px";
// green.style.height = "40px";
// green.style.border = "1px solid black";
// green.style.borderRadius = "50%";
// red.style.position = "relative";

// document.body.append(red, green);

// const delay = (ms) => new Promise((ok) => setTimeout(() => ok(ms), ms));

// async function PedestrianTrafficLight() {
//   while (true) {
//     green.style.backgroundColor = "#5cb85c";
//     red.style.backgroundColor = "#696969";
//     await delay(4000);
//     green.style.backgroundColor = "#696969";
//     red.style.backgroundColor = "#d9534f";
//     await delay(3000);
//   }
// }
// PedestrianTrafficLight();

// stage 2, 3 оказался непонятным в реализации

// speedtest !!!!!

// async function speedtest(getPromise, count, parallel = 1) {
//   const start = Date.now();
//   const promises = [];
//   for (let i = 0; i < count; i++) {
//     for (let k = 0; k < parallel; k++) {
//       promises.push(getPromise());
//     }
//     await Promise.all(promises);
//   }

//   const end = Date.now();
//   const duration = end - start;
//   const queryDuration = duration / count;
//   const querySpeed = count / duration;
//   const parallelDuration = duration / (count * parallel);
//   const parallelSpeed = (count * parallel) / duration;

//   return {
//     duration,
//     querySpeed, //середня швидкість одного запиту
//     queryDuration, //
//     parallelSpeed,
//     parallelDuration,
//   };
// }

// speedtest(() => delay(1000), 10, 10).then((result) => console.log(result));

// speedtest(
//   () => fetch("http://swapi.dev/api/people/1").then((res) => res.json()),
//   10,
//   5
// );

// gql !!!

function gql(url, query, variables) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
		body: JSON.stringify({})
  });
}
