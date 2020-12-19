// Diámetro del círculo
// Solicita al usuario el valor del radio de un
// círculo y calcula su diámetro.
// Almacenar el valor de PI en una constante



let radio = parseInt(prompt('Ingrese la medida del radio'));

// Arrow function ??
let diametro = (radio) => { return radio * 2;}      
console.log('El diámetro del círculo es ' + diametro(radio));


// Function
// function diametro (radio) {
//     return radio*2;             
// }
// console.log('El diámetro de la circunferencia es ' + diametro(radio));


// Perímetro de un círculo = 2 * π * r o π x d.
let calculaPerimetroCirculo = (radio) => { return 2* Math.PI * radio;}
console.log('El perímetro del círculo es ' + calculaPerimetroCirculo(radio));


// // Área de un circulo = π * r2
let calculaAreaCirculo = (radio) => { return Math.PI * (radio+radio);}
console.log('El perímetro del círculo es ' + calculaAreaCirculo(radio));