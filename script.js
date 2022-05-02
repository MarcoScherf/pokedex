let currentPokemon;
let previousNumber = 0;
let currentNumber = 20;

// help function //
function getID(id) {
    return document.getElementById(id);
}
// **************** //

// onscroll to end the page load more Pokemon //
function morePokemon() {
    previousNumber = previousNumber + 20;
    currentNumber = currentNumber + 20;
    loadPokemon();
}
// **************** //

// load Pokemon from api // 
async function loadPokemon() {
    for (let i = previousNumber + 1; i <= currentNumber; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        renderPokemonCard(i);
        setAttributes(i);
    }
}
// **************** //


function setAttributes(i) {
    for (let j = 0; j < currentPokemon['types'].length; j++) {
        let types = currentPokemon['types'][j]['type']['name'];
        getID(`type${i}`).innerHTML += `<span class="type">${types}</span>`;
    }
}

function renderPokemonCard(i) {
    getID('pokemon-card').innerHTML += templateCard(i);

}

function templateCard(i) {
    return `<div class="card" style="background-color: var(--bg-${currentPokemon['types'][0]['type']['name']}">
    <div class="name-id">
        <h2>${currentPokemon['name']}</h2>
        <span class="id">#${currentPokemon['id']}</span>
    </div>
    <div id="type${i}" class="types"></div>
    <div class="img">
        <img class="pokemon-img" src="${currentPokemon['sprites']['other']['home']['front_default']}">
    </div>
</div>`;
}