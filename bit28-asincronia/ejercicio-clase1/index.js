// Crea dos funciones
// function one imprime 1
// function two imprime 2
// A la function one créale un retardo de 1 segundo con setTimeOut para mostrar el mensaje.
// En la function 2 imprime el mensaje sin ningún retardo.
// En el hilo principal de tu aplicación ejecuta primero one y luego two.
// Si todo es correcto, primero debería mostrarse el número 2.

function one (callback) {
  callback(); // llamada a la función que ejecuto primero = two por callback
  setTimeout( function() {
  console.log('imprime 1');}, 5000) // retardo para ejecutar
}

function two () {
console.log('imprime 2');
}

one(two); // llamar a la función para ejecutar en consola, alert etc



