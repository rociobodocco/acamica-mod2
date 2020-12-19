// Genera un array con al menos 10 datos de diferentes tipos.
// Tu script debe dar los siguientes outputs:

// La suma de todos los valores numéricos
// Un nuevo array con todos los datos no numéricos


let elementGroup = ['Lau', 'Nao', 'Mariano', 'Javier', 'Giuseppe', 32, 40, 29, 5, 10];
let suma = 0; // inicializar 
let notNumber = []; // nuevo arreglo variable declarada nueva 

for(i = 0; i < elementGroup.length; i++) {
    console.log('El valor en la posición ' + i, typeof(elementGroup[i]));

    switch (typeof(elementGroup[i])) {
        case 'number': suma += elementGroup[i]; // acumulador de valores, lo que tengo más lo que viene
            
        break;

        case 'string': notNumber.push(elementGroup[i]); // agregar un nuevo arreglo variable let notNumber creada
        
        break;
    }
}

console.log(suma); // imprimo la suma de 'number'
console.log(notNumber); // imprimo el nuevo arreglo de 'strings' notNumber



