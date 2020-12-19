// Crea 3 promesas diferentes que tomen al azar un número del 1 al 100.
// Cuando las 3 promesas tienen el número al azar mayor a 50 muestra un mensaje de éxito,
// de lo contrario muestra un mensaje que indique que al menos 1 promesa no superó el número 50.

let p1 = new Promise((resolve, reject) =>{ //puede tener números el nombre de la variable?
    // console.log('Procesando')
    setTimeout(() => {
    let number1 = Math.floor(Math.random() * 100);
    console.log('number1', number1);
    if (number1 >= 50) {
        resolve(number1)
    } else {
        reject(number1)
    }
}, 4000)
});

let p2 = new Promise((resolve, reject) =>{ 
    // console.log('Procesando')
    setTimeout(() => {
    let number2 = Math.floor(Math.random() * 100);
    console.log('number2', number2);
    if (number2 >= 50) {
        resolve(number2)
    } else {
        reject(number2)
    }
}, 6000)
});

let p3 = new Promise((resolve, reject) =>{ 
    // console.log('Procesando')
    setTimeout(() => {
    let number3 = Math.floor(Math.random() * 100);
    console.log('number3',number3);
    if (number3 >= 50) {
        resolve(number3)
    } else {
        reject(number3)
    }
}, 2000)
});

Promise.all([p1, p2, p3])
.then((result) => {
    console.log(result, 'Mayor a 50')
})
.catch(error => {
    console.log(error, 'Menor a 50 - Intenta nuevamente')
});

// arroja un objeto si todos son menores o mayores 
// arroja un mensaje en el error que capta

