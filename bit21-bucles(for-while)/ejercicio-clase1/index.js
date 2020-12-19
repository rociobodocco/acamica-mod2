// // Ejercicio: con solución con error!!!!

// var result = 0;
// var numIterations = 5;

// for (var i = 0; i < numIterations; i++) {

//     var value = parseInt(prompt("ingrese un valor " + i));

//     if (value == NaN) {
//         alert("Esto no es un número");
//         i = i - 1;
//     }
//     else {
//         result = result + value;
//     }
// }

// alert(result);

// var average = result / numIterations;
// alert(average);




// Solución correcta:


var result = 0;
var iterations = 5;

for(var i=0; i<iterations; i++) {
    var inputValue = parseInt(prompt("Ingrese un valor " + i));
    console.log(inputValue)
    if(isNaN(inputValue)){ //la duda de la clase pasada estaba aca
        alert("eso no es un numero, por favor reingrese");
        i=i-1;
        console.log(inputValue)
    } else {
        result = result + inputValue;
    }
}

alert(result);
var promedio = result / iterations;
alert(promedio)


