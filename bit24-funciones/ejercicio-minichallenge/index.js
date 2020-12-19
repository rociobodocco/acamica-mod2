// // Arrow functions:
// // Sintáxis 1
// let saludar = (nombre, apellido) => "hola " + nombre + " " + apellido;
// saludar("Josefina", "Suarez"); //hola Josefina Suarez

// // Sintáxis 2
// //recibe un parámetro y retorna si es mayor a cero, menor o igual a cero
// let mayor_menor = numero => {
//     if(numero > 0){
//             r = 'Mayor';
//     }else{
//     if(numero < 0){
//             r = 'Menor';
//     }else{
//     r = 'Cero';
//     }
//     }
//     return r;
// }

// Mini challenge: Escribe esta función con la Sintáxis #1 con un operador ternario.
let mayor_menor = parseInt(prompt('Ingrese un número')),
check = mayor_menor >0 ? alert('Mayor') : mayor_menor <0 ? alert('Menor') : alert('Es igual');