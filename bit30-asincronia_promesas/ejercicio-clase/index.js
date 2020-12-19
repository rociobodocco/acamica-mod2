// Genera un array con 10 posiciones numéricas.
// Toma de manera aleatoria 3 elementos.
// Lanza 3 fetch al mismo Endpoint de Pokemon y muestra solamente la primera respuesta.

// Repite el proceso: toma de manera aleatoria 3 elementos.
// Lanza 3 fetch al mismo Endpoint de Pokemon y muestra los siguientes resultados:
// Si los 3 request finalizaron correctamente, muestra los resultados por pantalla.
// Si algún request falló (te tocó el valor string en la elección aleatoria), muestra un error por pantalla.


let numbers = [2, 4, 10, 15, 17, 22, 34, 39, 50, 100];
const apiBaseUrl = 'https://pokeapi.co/api/v2/pokemon/';
let container = document.getElementById('container');
function getNumbers(selectedNumber) {
    const getNumbers = fetch(apiBaseUrl + selectedNumber)
        .then((response) => {
            return response.json();
        }).then(data => {
            return data;
        })
        .catch((error) => {
            return error
        })
    return getNumbers
}

Promise.all([getNumbers(numbers[parseInt(Math.floor(Math.random() * numbers.length))]),
    getNumbers(numbers[parseInt(Math.floor(Math.random() * numbers.length))]),
    getNumbers(numbers[parseInt(Math.floor(Math.random() * numbers.length))])])
        .then(results => {
            console.log(results);
            pokemons = results;
            for (let i = 0; i < pokemons.length; i++) {
                let element = document.createElement('div');
                element.innerHTML = "<strong>" + pokemons[i].name +
                    "</strong><br><img src='" +
                    pokemons[i].sprites.front_default + "'>";
                element.className = 'border';
                container.appendChild(element);
            }
        })
        .catch(error => console.log(error))