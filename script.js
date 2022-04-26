let currentPokemon;

// load Pokemon from api // 
async function loadPokemon() {
    for (let i = 1; i <= 24; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
    }

}
// **************** //