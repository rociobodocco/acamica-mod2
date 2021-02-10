const getPokemons =  async (base) => {
    try {
        const pokemons = await fetch(base);
        return pokemons.json()
    }catch (e) {
        console.log(e)
    }
}

const getSinglePokemons =  async (base) => {
    try {
        const pokemon = await fetch(base);
        return pokemon.json()
    }catch (e) {
        console.log(e)
    }
}

document.addEventListener('DOMContentLoaded',async (ev)=> {
    const BASE = "https://pokeapi.co/api/v2/pokemon";
    const pokemons = await getPokemons(BASE);

    const pokemonsAsync = pokemons.results.map( async pokemon => {

        const singlePokemon = await getSinglePokemons(pokemon.url);
        return {
            name: pokemon.name,
            weight: singlePokemon.weight
        }})

    const pokemonsData = await Promise.all (pokemonsAsync)
    console.log (pokemonsData)
})


// -------------------------------------------------------------------------------------------
// const getAllPokemons =  async (url) => {
//     try {
//         const pokemons = await fetch(url);
//         return pokemons.json()
//     }catch (e) {
//         console.log(e)
//     }
// }
// const getSinglePokemon =  async (url) => {
//     try {
//         const pokemon = await fetch(url);
//         return  pokemon.json()
//     }catch (e) {
//         console.log(e)
//     }
// }
// document.addEventListener(‘DOMContentLoaded’,async (ev)=> {
//     const URL  = “https://pokeapi.co/api/v2/pokemon”;
//     const pokemons  = await getAllPokemons(URL);
//     const pomekonDataPromises = pokemons.results.map (async pokemon => {
//         const pokeTemp = await getSinglePokemon(pokemon.url)
//         return {
//             name: pokemon.name,
//             weight : pokeTemp.weight
//         }
//     })
//     const pokemonJson = await Promise.all (pomekonDataPromises)
//     console.log(pokemonJson)
// })