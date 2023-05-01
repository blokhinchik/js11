// FETCH BASIC !!!

fetch("https://swapi.dev/api/people/1/")
  .then((res) => res.json())
  .then((luke) => {
    displayJSON(document.body, luke);
  });

function displayJSON (DOM, data) {
	const table = document.createElement("table")
	const trHead = document.createElement("tr")
	table.style.border = "1px solid black"

	for(let key in data){
		const th = document.createElement("th")
		th.innerText = key
		th.style.border = "1px solid black"
		trHead.append(th)
	}

	const trBody = document.createElement("tr")
	for(let key in data){
		const td = document.createElement("td")
		td.innerText = data[key]
		td.style.border = "1px solid black"
		trBody.append(td)
	}

	table.append(trHead)
	table.append(trBody)

	DOM.append(table)
}

// FETCH IMPROVED !!!
