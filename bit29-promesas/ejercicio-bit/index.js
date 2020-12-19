// la clase Promise podemos construir un objeto con los métodos 
// necesarios para ejecutar la resolución de las promesas. 
// El constructor de la clase recibe un parámetro de tipo función, 
// la cual será la encargada de contener las instrucciones 
// para la lógica de tu promesa y definirá si es aprobada o rechazada:

let mi_promesa = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 5);     
    if(number > 0){
        resolve((number % 2)? "es impar" : "es par");
    }else{
        reject("es cero")
    }
});

//Math.floor Devuelve el máximo entero menor o igual a un número.
//Math.random Devuelve un número pseudo-aleatorio dentro del rango [0, 1). 
// Esto es, desde el 0 (Incluido) hasta el 1 pero sin incluirlo (excluido)

mi_promesa
    .then(number => console.log(number))
    .catch(error => console.error(error));

// Obtener el resultado de una promesa de forma exitosa. 
// Con el método then se puede registrar una función callback 
// que será ejecutada cuando la promesa se resuelva y devuelva un resultado. 
// Al utilizar then podemos indicar dos funciones, 
// la primera se ejecutará en el caso en el que la promesa 
// sea resuelta exitosamente, y la segunda cuando falle.

// Capturar promesas rechazadas. 
// Con el método.catchpodemos capturar las promesas rechazadas 
// y definir nuestro bloque de código para trabajar con el error.


