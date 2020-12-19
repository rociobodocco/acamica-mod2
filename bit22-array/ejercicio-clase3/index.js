// Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese “Stop”.
// Almacenar todos los datos en un array y mostrarlos al final.


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