function mensaje(nombre, sexo) {
    console.log('2');
    console.log('3');
    console.log('4');
    if (sexo === true) {
        msj= 'Bienvenida ' + nombre;
    } else {
        msj= 'Bienvenido ' + nombre;
    }

    return msj;
}

console.log('1');

console.log(mensaje('María', true)); // llamada a la funcion

console.log('5');
console.log('6');

console.log(mensaje('Juan', false));


console.log('7');

console.log(mensaje('Barbara', true));

console.log('8');
console.log('9');

console.log(mensaje('Pedro', false)); 