// Modificar el ejercicio de Pokemos



// -----------------------------------------------------------------------------------------------
//1. crear un array de templates de [<a href=“https://pokeapi.co/api/v2/pokemon/10/”>]
// const newTemplate = [];

// pokemonMock.results.forEach((pokemon) => {
//     newTemplate.push(`<a href='${pokemon.url}'></a>`);
// }); 

// console.log(newTemplate);

// -------------------------------------------------------------
//2. array de nombres de pokemon [“blastoise”,...]
// const nameTemplate = [];

// pokemonMock.results.forEach((namePokemon) => {
//     nameTemplate.push(namePokemon.name);
// }); 

// console.log(nameTemplate);




// -------------------------------------------------
//3. objeto {
    // “pokemons”: [“pikachu”]
    // “urls”: [“https://...“]
//}

// const pokemonesObjeto = {
//     "pokemons": [],
//     "urls": []
// }
// pokemonMock.results.forEach((value) => {
//     pokemonesObjeto.pokemonMock.push(value.name);
//     pokemonesObjeto.urls.push(value.url);
// });
// console.log(pokemonesObjeto);




// ------------------------------------
//4. objeto {
// “a”: []
// “b”: []
//}

// const nombresPokemon = {};
// const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");        //split lo convierte en array (26 arrays)
// alfabeto.forEach(letra => {
//     pokemonMock.results.forEach(pokemon => {
//         if (pokemon.name.startsWith(letra)){
//             if (!(letra in nombresPokemon)) {
//                 nombresPokemon[letra] = []; 
//             }
//             nombresPokemon[letra].push(pokemon.name);
//             console.log(nombresPokemon);
//         }
//     });
// });


// otra opción

// const nombresPokemon = {};
// const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
//  alfabeto.forEach(letra => {
//     //crear el key
//     nombresPokemon[letra] = [];
//     pokemonMock.results.forEach (pokemon => {
//         if(pokemon.name.startsWith(letra)){
//             //push a nombresPokemon
//             nombresPokemon[letra].push(pokemon.name);
//         }
//     })
//  })
//  console.log(nombresPokemon);

const pintarPokemons = (imgs) => {
    imgs.forEach(element => {
        const cardPokemons = document.querySelector('.container-pokemons');
        cardPokemons.innerHTML = `<div class="tipos-pokemons">
            <img class="imgprueba" src="${element.url}" alt="imgprueba">
            <h6 class="titleCardimg" id="titleCardimg">${element.name}</h6>
            </div>`;
        element.appendChild(cardPokemons);
    });
}