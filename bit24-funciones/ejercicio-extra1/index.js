// Solicitar al visitante que ingrese su nombre de usuario.
// Almacenar el nombre de usuario ingresado el una función.
// Escenario 1: El nombre no está en la lista.
// Darle la bienvenida al nuevo usuario
// Escenario 2: El nombre de usuario existe.
// Dar un aviso al usuario que el nombre de usuario se encuentra en uso
// Utilizar una función con try / catch para realizar la validación

let user_name_list = ["alejo", "lautaro", "laura", "rocio", "fede", "mariano"];

let evaluateName = (name) => {
    for (let i = 0; i < user_name_list.length; i++) {
        if (name.toLowerCase() == user_name_list[i]) {
            throw (new Error("El usuario ya existe <<--->>"));
        }
    }
}
try {
    let user_name = prompt("Ingrese su nombre");
    evaluateName(user_name);
    user_name_list.push(user_name.toLowerCase());
    console.log("Welcome "+ user_name);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}


