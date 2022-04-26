let currentPokemon;
let previousNumber = 0;
let currentNumber = 24;

// help function //
function getID(id) {
    return document.getElementById(id);
}
// **************** //

// onscroll to end the page load more Pokemon //
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        previousNumber = previousNumber + 24;
        currentNumber = currentNumber + 24;
        loadPokemon();
    }
};
// **************** //

// load Pokemon from api // 
async function loadPokemon() {
    for (let i = previousNumber + 1; i <= currentNumber; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        renderPokemonCard();
    }

}
// **************** //


function renderPokemonCard() {
    getID('pokemon-card').innerHTML += templateCard();
}

function templateCard() {
    return `<div class="card" style="background-color: var(--bg-${currentPokemon['types'][0]['type']['name']}">
    <div class="name-id">
        <h2>${currentPokemon['name']}</h2>
        <span class="id">#${currentPokemon['id']}</span>
    </div>
    <span class="type">${currentPokemon['types'][0]['type']['name']}</span>
    <div class="img">
        <img class="pokemon-img" src="${currentPokemon['sprites']['other']['home']['front_default']}">
    </div>
</div>`;
}