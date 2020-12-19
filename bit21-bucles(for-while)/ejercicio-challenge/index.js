// ciclo FOR:
// Repite una o más instrucciones un determinado número de veces. 
// Se inicia con for y se deben especificar, entre paréntesis, 
// tres partes diferentes, separadas por puntos y comas (;) tras la palabra reservada.

// // opción 1
// // imprimir tabla del 5;
// let base = 5; // let: se limita al bloque donde se está usando 
// //límite de la tabla 
// let limite = 10;

// for (let i = 1; i <= limite; i++) {
//     let resultado = base * i;
//     alert(base + ' x ' + i + ' = ' + resultado);
// }

// alert('¡Felicitaciones aprendiste la tabla del 5!');

// // opción 2
// imprimirTabla (5,10); // base 5 , límite 10

// function imprimirTabla (base,limite) {
//     for (let i = 1; i <= limite; i++) {
//         let resultado = base * i;
//         alert(base + ' x ' + i + ' = ' + resultado);
//     }
// }

// alert('¡Felicitaciones aprendiste la tabla del 5!');

// =============================================================================================== //


// ciclo WHILE:
// Ejecuta una sentencia especificada mientras la condición a evaluar sea verdadera. 
// Va a hacer una tarea hasta que una condición sea falsa.
// Dicha condición es evaluada antes de ejecutar la sentencia.

// // El juego tiene 10 vidas
// let hearts = 10; // 100%

// while (hearts > 0) {
//     alert('Vidas restantes = ' + hearts);
//     hearts--; // hearts = hearts - 1;
// }

// alert('Ya no tiene más vidas - Game Over');