// Do while : ejecuta una sentencia especificada, hasta que la condición a evaluar sea falsa. 
// La condición se evalúa después de ejecutar la sentencia, 
// dando como resultado que la sentencia especificada se ejecute al menos una vez.

// Ejercicio: Crea un ciclo del tipo do … while
// Solicita al visitante un usuario y contraseña.
// Crea una función para validar que los datos ingresados son correctos.
// Si son correctos corta la ejecución del ciclo
// Si son incorrectos vuelve a solicitar al visitante usuario y contraseña

// 1° declarar constantes:
const user1 = 'Rocio';
const pass1 = 1234;

// 2° declarar funciones:
function validatorOk(user,password) {
    if (user == user1 && password == pass1) {
        return true;
    } else {
        return false;
    }
}

// 3° declarar llamado a la función:
do {
    var user = prompt('Ingresar usuario');
    var password = parseInt(prompt('Ingresar contraseña'));
    var validUser = validatorOk(user,password);
} while (validUser == false);

