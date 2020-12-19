// Crea una promesa que elija un número al azar entre 0 y 10.
// Si el número es par, considera la promesa exitosa.
// Si el número es impar, rechaza la promesa.
// Muestra por consola si la promesa finalizó con éxito o no y el número al azar que salió.

let esPar = new Promise((resolve, reject) =>{
    let number = Math.floor(Math.random() * 10);
    // console.log(number);
    if (number % 2 == 0) {
        resolve(number)
    } else {
        reject(number)
    }
});

esPar
.then((result) => {
    console.log(result, 'es par')
})
.catch(error => {
    console.log(error, 'es impar')
})