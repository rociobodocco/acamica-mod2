let iterations = 5;
let elementGroup = [];

function sumatory(values) {
    let suma = 0; 
    for(let i = 0; i <= values.lenght; i++) {
        console.log(values[i]);
        suma += parseInt(values[i]);
    }
    return suma;
}

for(let i = 1; i <= iterations; i++) {
    let value = prompt('Ingrese el valor ' + i);
    elementGroup.push(value);
    console.log('Elementos del grupo ', elementGroup);
}

let sumaFin = sumatory(elementGroup);
console.log(sumaFin);