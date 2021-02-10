
const pokemonApi = async (apiUrl) => {
  try {
      const pokemons = await fetch(apiUrl);
      return pokemons.json();
  } catch (error) {
      console.log('ocurrió un error', error);
  }
}

// handler callback
document.addEventListener('DOMContentLoaded', async() => {

  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';
  const pokemonsData = await pokemonApi(API_URL); 
  pintarPokemons(pokemonsData);
});



