// Crea un array donde cada posición sea un objeto que
// contenga la siguiente información:
// - Nombre
// - Apellido
// - Email
// - Usuario
// - Contraseña
// - Activo (booleano)
// Adapta tu función de “programamos” para que trabaje
// con estos nuevos datos.
// Solo permite loguear personas con el usuario y
// contraseña correcto y que tengan su usuario activo.

class Usuario{
    name='';
    lastname=0;
    email='';
    user='';
    password=0;
    active=true;
    setactive(activeUser){
        this.active=activeUser;
    }
}

let user1 = new Usuario();
user1.name='Rocio';
user1.lastname = 'Bodocco';
user1.email= 'rocio.bodocco@gmail.com';
user1.user = 'rociobodocco';
user1.password = 1234;
active = true;

let user2 = new Usuario();
user1.name='Martin';
user1.lastname = 'Gonzalez';
user1.email= 'martin.gonzales@gmail.com';
user1.user = 'tincho';
user1.password = 6789;
active = false;

console.log('User 1', user1);
console.log('User 1', user1);

let confirmar = true;
let arrayObjects = [user1,user2];


let newUser = new Usuario();
newUser.name=prompt('Ingrese el nombre');
newUser.lastname=parseInt(prompt('Ingrese el apellido'));
newUser.email=prompt('Ingrese el email');
newUser.user=prompt('Ingrese la usuario');
newUser.password=parseInt(prompt('Ingrese la contraseña'));
newUser.setactive = confirm('Confirma la activación de su cuenta?')

arrayObjects.push(newUser);

console.log(arrayObjects);


// let loginUser = (user,password,active) => {
//     for (let i = 0; i < arrayObjects.length; i++) {
//         if (user.toLowerCase() == arrayObjects[i]) {
//             confirmar = confirm('Continuar acceso');
//             // throw (new Error("El usuario es incorrecto <<--->>"));
//         }
//         if (password == arrayObjects[i]) {
//             confirmar = confirm('Continuar acceso');
//         }
//         if (active == true) {
//             confirmar = confirm('Ingresar');
//         }
//     }
// }



// try {
//     let user_name = prompt("Ingrese su nombre");
//     evaluateName(user_name);
//     user_name_list.push(user_name.toLowerCase());
//     console.log("Welcome "+ user_name);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }



// Crea una nueva función que permita agregar nuevos
// usuarios en tu array.
// Solicita toda la información a través de prompt.



// Crea una nueva función que permita modificar un usuario.
// Recibe su nombre de usuario y busca si existe.
// - Si no existe, informa este error a través de un alert.
// - Si existe, solicita todos los datos a través del prompt y
// reemplaza el objeto con la nueva información.
