let numeros = []; // arreglo nuevo vacio porque no se de cuantos elementos va a ser 
let ingresos = ''; // declaro variable vacia porque no se cuantos ingresos va a realizar el usario
do {
    ingresos = prompt('Ingrese números, para terminas ingrese stop'); // no hace falta poner let porque ya lo declare 
    let esNum = parseInt(ingresos); // convertir prompt en números
    if (!isNaN(esNum)) { // si NaN no es un número 
        numeros.push(esNum); // agregar al arreglo vacio el ingreso del usuario
    }
} while (ingresos !== 'stop'); // ingresos es distinto de 'stop'

console.log(numeros); // imrpimo el arreglo llamado numeros


// Escribe una función arrow que reciba como parámetro un array y 
// calcule el promedio de los elementos tipo numérico.

let count = numeros.length;
numeros = numeros.reduce((previous, current) => current += previous);
let promedio = numeros /= count;
console.log(promedio);


// Otra forma:

// let values = [2, 56, 3, 41, 0, 4, 100, 23];
// let sum = values.reduce((previous, current) => current += previous);
// let avg = sum / values.length;
// console.log(avg)
// //solucion usando for loop
// let arrayNums = [1,5,true,'google',false,7,8,9,6,3,5,4,"acamica",7,8,5];
// let getAverage = list => {
//     let sum = 0;
//     let quantity =0;
//     for (let i = 0; i < list.length; i++) {
//       console.log(list[i]);
//       if(typeof(list[i])=== 'number'){
//         sum += list[i];
//         quantity += 1
//       }
//     }
//     return sum / quantity;
//   }
//   console.log(getAverage(arrayNums))
