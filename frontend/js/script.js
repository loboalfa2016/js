//alert("hello coder!");
//const name = prompt("What is your name?");//
//alert(`Hello, ${name}!`);// 

const url = "https://rickandmortyapi.com/api/character";

async function getData(url) {
    const response = await fetch(url)
    const {results} = await response.json()
    const statusAlive = results.filter(character => character.status === "Alive")
    const nombresVivos = statusAlive.map(character => character.name)
    console.log(nombresVivos)
}

getData(url);