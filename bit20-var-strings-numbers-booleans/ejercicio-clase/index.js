// var number = 1; // tipo num
// typeof(number); // especifica que tipo de var es 

// challenge bit 20 
// var name = 'Rocio';
// var lastname = 'Bodocco';

// alert('Hola! Soy ' + name + ' ' + lastname); // mensaje emergente concatenando texto con variables 


// prompt : funcion que recibe un parametro (recoge datos strings)
// parseInt(prompt('sajhdjahfjhds'))   tranforma en numero si corresponde 
// var name = prompt('Cual es tu nombre?'); // var name queda guardado en el prompt
// var lastname = prompt('Cual es tu apellido?');
// alert('Hola! Soy ' + name + ' ' + lastname);
// if(name == 'Rocio') { // puedo agregar mas opciones con operadores lógicos barra barra (or) y && (and) (lastname != '')
//     var age = prompt('Cual es tu edad?');
// } else {
//     var num1 = parseInt(prompt('Cual es el valor 1?'));
//     var num2 = parseInt(prompt('Cual es el valor 2?'));
//     alert('La suma es ' + suma(num1, num2)); 
// }

// function suma(numero1,numero2) { // llama por nombre de la funcion, independientemente del nombre de la variable antes declarada
//     return (numero1 + numero2);   
// }


var num1 = parseInt(prompt('Ingrese el número 1'));
var num2 = parseInt(prompt('Ingrese el número 2'));
alert('La suma es ' + suma(num1,num2));     

function suma(numero1, numero2) {
    return(numero1 + numero2);
}