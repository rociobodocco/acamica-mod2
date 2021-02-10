// Crea un aplicación que nos convierta una cantidad de euros introducida por teclado a otra moneda, 
// estas pueden ser a dolares, yenes o libras. El método tendrá como parámetros, 
// la cantidad de euros y la moneda a pasar que sera una cadena, este no devolverá ningún valor, 
// mostrara un mensaje indicando el cambio.
// El cambio de divisas son:
// 0.86 libras es un 1 €
// 1.28611 $ es un 1 €
// 129.852 yenes es un 1 €


// const amountEur = parseInt(prompt('Ingrese la cantidad de euros a convertir'));
// const currency = prompt('Ingrese el tipo de moneda: GBP - YEN - USD');

// const convert = (num, str) => {
//     if (str === 'Lib') {
//         alert(num * 0.86);
//     } else if (str === 'Yen') {
//         alert(num * 129.852);
//     } else if (str === 'Usd') {
//         alert(num * 1.28611);
//     } else {
//         alert('Ingrese una moneda correcta');
//     }
// }

// convert(amountEur, currency);


// Versión con switch

// const printResult = (divice, initialNum, calculateValue) => { // funcion para tener un solo alert para poder mantener mas facil
//     alert(`El total de ${initialNum} EUR es ${calculateValue} ${divice}`);
// }

// const convert = (num, str) => {
//     switch (str.toUpperCase()) {
//         case 'YEN':
//             printResult(str.toUpperCase(),num, num * 129.852);
//             break;
//         case 'USD':
//             printResult(str.toUpperCase(),num, num * 1.28611);
//             break;
//         case 'GBP':
//             printResult(str.toUpperCase(),num, num * 0.86);
//             break;
//             default:
//                 alert('Ingrese un valor o moneda válida');
//     }        
// }
// convert(amountEur, currency);


// --------------------------------------------------------------------------------------------------------------------------------
// Crea una aplicación que nos genere una cantidad de números enteros aleatorios 
// que nosotros le pasaremos por teclado. 
// Crea un método donde pasamos como parámetros entre que números queremos que los genere,
// podemos pedirlas por teclado antes de generar los números. 
// Este método devolverá un número entero aleatorio. 
// Muestra estos números por pantalla.

// Si desea un número aleatorio entre 1 y 10, multiplique los resultados de Math.randompor 10 y luego redondee hacia arriba o hacia abajo.
// Use .floorpara redondear hacia abajo a un número entero:
// console.log (Math.floor (Math.random () * 10))
// Uso .ceilde vuelta hacia arriba a un número entero:
// console.log (Math.ceil (Math.random () * 10))
// Use .roundpara redondear al número entero más cercano :
// console.log (Math.round (Math.random () * 10))


// CONVERTIR NaN en numero entero siempre con dos formas de escribir codigo:
//Largo:
// let numeroPosible = 0;
// // const numEnterosString = prompt("Ingrese la cantidad de numeros que desea:"); // Pido la cant num al usuario 
// // if( isNaN(parseInt(numEnterosString)) == false ) {
// //     numeroPosible = parseInt(numEnterosString);
    
// // }
// // console.log(numeroPosible);
// // Corto con operador ternario:
// const numEnteros = isNaN(parseInt(prompt(numEnterosString)) ? 0 
//                       : parseInt(prompt(numEnterosString)));


// const NUM_MIN = 0;
// const NUM_MAX = 10; //Mayus para constantes que no cambian nunca 
// const numsAleatorios = [];

// const traerNumAleatorio = (min, max) => { //funcion
//     return Math.floor(Math.random() *  (max - min + 1) + min); 
// }
// //recorro para ir agregando en el arreglo vacio
// for(let i = 0; i > numEnteros; i++) {
//     numsAleatorios.push(traerNumAleatorio); //agrego al arreglo vacio la cantidad que quiere el usuario de nums aleatorios entre 0 y 10 
// }

// console.log(numsAleatorios); //Imprimo el arreglo

// ------------------------------------------------------------------------------------------------------------------------------------
// Crea una aplicación que nos cuente el número de cifras de un número entero positivo (hay que controlarlo) pedido por teclado. 
// Crea un método que realice esta acción, pasando el número por parámetro, devolverá el número de cifras.