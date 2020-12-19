// Ejercicio 1: automovil

// const kmPorLitro = 15;
// const tanque = 45;

// var distancia = parseInt(prompt('Cantidad de km a recorrer'));

// function multiplicar (num1, num2) {
//     return (num1 * num2);
// }

// if (distancia <= multiplicar(kmPorLitro, tanque)) {
//     alert('Buen viaje');
// } else {
//     alert('No va a poder viajar, por favor recargue');
// }



// Ejercicio 2: modelo tanque automoviles

var modelo = parseInt(prompt('Ingresa el modelo del vehículo'));
var km = parseInt(prompt('Ingresa el recorrido a realizar en km'));

const mod1 = 15;
const mod2 = 12;
const mod3 = 10;
const cargaMaxima = 50;

function multiplicar(modelo, carga) { // modelo, carga los declaro en los if cuando traigo la variable nueva  
    return (modelo*carga)
}

if (modelo == 1) {
    var multiplicacion = multiplicar(mod1,cargaMaxima);
}


if (modelo == 2) {
    var multiplicacion = multiplicar(mod2,cargaMaxima);
}


if (modelo == 3) {
    var multiplicacion = multiplicar(mod3,cargaMaxima);
}


function dividir(km, multiplicar) {
    return (km/multiplicar)
}

alert('La cantidad de tanques que necesita es ' + dividir(km,multiplicacion));