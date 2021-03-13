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

const getabilitiesPokemon =  async (base) => {
    try {
        const abilities = await fetch(base);
        return abilities.json()
    }catch (e) {
        console.log(e)
    }
}

const getlocationAreasEncountersPokemon =  async (base) => {
    try {
        const locationAreasEncounters = await fetch(base);
        return locationAreasEncounters.json()
    }catch (e) {
        console.log(e)
    }
}

let offsetPokemon = 0;

//pagination
const verMas = (ev) => {
    offsetPokemon += 20;
    getPokemonesGeneral();
}

const getPokemonesGeneral = async (ev) => {
    const BASE = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offsetPokemon}`;
    const pokemons = await getPokemons(BASE);

    const pokemonsAsync = pokemons.results.map( async pokemon => {
        const singlePokemon = await getSinglePokemons(pokemon.url);
        const abilitiesP = await getabilitiesPokemon(`https://pokeapi.co/api/v2/ability/${singlePokemon.id}`)
       
        return {
            name: pokemon.name,
            image: singlePokemon.sprites.other.dream_world.front_default,
            id: singlePokemon.id,
            weight: singlePokemon.weight,
            height: singlePokemon.height,
            abilities: abilitiesP.name,
        }
    })



    const pokemonsData = await Promise.all (pokemonsAsync)

        
        pokemonsData.forEach(info => {
            const containerCards = document.querySelector('#containerPokemons');
            const cardBase = document.createElement('div');
            cardBase.classList.add('card');
            cardBase.innerHTML = `<h3>${info.name}</h3>
            <div class="imgPokemon"><img src="${info.image}" alt="img1"></div>
            <div class="descriptionPokemon">
                <ul>
                    <li>Id:  ${info.id}</li>
                    <li>Weight: ${info.weight}</li>
                    <li>Height: ${info.height}</li>
                    <li>Ability: ${info.abilities}</li>
                </ul>
            </div>`

            containerCards.appendChild(cardBase);        
        });
    
}


//create "ver mas"
const createButton = () => {
    const containerCards = document.querySelector('#containerPokemons');
    const verMasBtn = document.createElement('span');
    verMasBtn.classList.add('verMasBtn')
    verMasBtn.innerHTML = `<img src="./images/902px-Pokebola-pokeball-png-0.png" alt="pokeball">`;
    containerCards.appendChild(verMasBtn)

    verMasBtn.addEventListener('click', verMas)
}


document.addEventListener('DOMContentLoaded',async (ev)=> {
    // const pokemonesBtn = document.querySelector('.get-pokemon');
    // pokemonesBtn.classList.add('hidden');
    getPokemonesGeneral();
    createButton();
})






