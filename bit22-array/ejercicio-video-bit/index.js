var mi_variable = 'Rocio Bodocco 25'; // todo junto, no puedo acceder facilmente desde otra parte del código. 

var name = 'Rocio';
var lastname = 'Bodocco';
var age = 25; // cada dato por separado sería mucho código

// array:
var person1 = ['Rocio', 'Bodocco', 25]; // índices a partir del 1º elemento = valor 0 ... 1... 2 etc
console.log(typeof(person1));  // typeof determina que tipo de array es el seleccionado 

console.log(person1[2]); // elemento seleccionado índice 2 = imprime 25 

console.log(typeof(person1[2])); // typeof determina que tipo de elemento es el seleccionado 

console.log(person1);

// insertar un elemento en el array:
person1.push('rocio.bodocco@gmail.com'); // agrego al final un nuevo elemento
console.log(person1); // imprimo en consola y veo desplegando el número de índice

console.log('Cantidad elementos del array: ' + person1.length);

console.log(person1[4]); // en la posición (índice) 4 no hay ningun elemento 

let countries = ['Argentina', 'Bolivia', 'Chile', 'Colombia', 'Mexico', 'Uruguay'];

for(var i = 0; i < countries.length; i++) { // lenght para que tome todos los elementos del array 
    console.log(i);
    console.log(countries[i]); // con un número de índice especifico elijo que país quiere que de una cierta cant vueltas
    // sino coloco un índice i para que pase por todos los países
}