const containerCards = document.querySelector('#containerPokemons');
const printPokemos = (pokemons) => {
    pokemons.forEach(info => {

        const cardBase = document.createElement('div');
        cardBase.classList.add('card');
        cardBase.innerHTML = `<h3>${info.name}</h3>
        <div class="imgPokemon"><img src="${info.image}" alt="img1"></div>
        <div class="descriptionPokemon">
            <ul>
                <li>Id:  ${info.id}</li>
                <li>Weight: ${info.weight}</li>
                <li>Height: ${info.height}</li>
                <li>Abilities: </li>
                <li>Locations encounters: </li>
            </ul>
        </div>`

        containerCards.appendChild(cardBase);        
    });

   
    
}