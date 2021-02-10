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

const getimagesPokemon =  async (base) => {
    try {
        const imgPokemon = await fetch(base);
        return imgPokemon.json()
    }catch (e) {
        console.log(e)
    }
}

// const getabilitiesPokemon =  async (base) => {
//     try {
//         const abilities = await fetch(base);
//         return abilities.json()
//     }catch (e) {
//         console.log(e)
//     }
// }

// const getlocationAreasEncountersPokemon =  async (base) => {
//     try {
//         const locationAreasEncounters = await fetch(base);
//         return locationAreasEncounters.json()
//     }catch (e) {
//         console.log(e)
//     }
// }



document.addEventListener('DOMContentLoaded',async (ev)=> {
    const BASE = "https://pokeapi.co/api/v2/pokemon";
    const pokemons = await getPokemons(BASE);
    

    const pokemonsAsync = pokemons.results.map( async pokemon => {
        console.log(pokemon.url)
        const singlePokemon = await getSinglePokemons(pokemon.url);
        const imgP = await getimagesPokemon(pokemon.url);
        // const abilitiesP = await getabilitiesPokemon(pokemon.url);
        // const locationEncountersP = await getlocationAreasEncountersPokemon(pokemon.url);
        
        return {
            name: pokemon.name,
            image: imgP.sprites.other.dream_world.front_default,
            id: singlePokemon.id,
            weight: singlePokemon.weight,
            height: singlePokemon.height,
            // abilities: abilitiesP.abilities.ability,
            // location_encounters: locationEncountersP.location_area_encounters
        }
    })
        
    const pokemonsData = await Promise.all (pokemonsAsync)
    console.log (pokemonsData)
    printPokemos(pokemonsData);
})

