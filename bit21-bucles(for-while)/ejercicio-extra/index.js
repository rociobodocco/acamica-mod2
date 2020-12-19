// Ejercicio 3: Dial de radio
// Crea un algoritmo que valida que una radio exista.
// Pide al usuario que ingrese un dial y valida la existencia de la radio con las siguientes condiciones:
// El dial debe ser impar
// El dial debe ser mayor o igual a 89.9
// El dial debe ser menor a 107.9



// var dial = parseInt(prompt('Ingresa el dial de radio que quieres escuchar'));
// dial.toFixed(2);
// var dialExiste = parImpar(dial);

// function parImpar(dial) {
//     if (dial % 2 == 0) {
//         return 'por favor ingrese un dial impar.';
//     } else if (dial <=89.9) {
//         return 'por favor ingrese un dial mayor a 89.9';
//     } else if (dial > 107.9) {
//         return 'por favor ingrese un dial menor a 107.9';
//     } else {
//         return 'disfrute de la estación de radio!';
//     }    
// }

// alert('El dial seleccionado es ' + dial + ', ' + dialExiste); 



// Ejercicio 4: Transferencia bancaria
// El usuario quiere transferir dinero a otro usuario.
// Solicita al usuario source la cantidad de dinero que quiere transferir y a quién desea hacerlo.
// Tu aplicación debe validar:
// Que tenga fondos para enviar dinero
// Que el destinatario exista
// Si las validaciones pasan correctamente muestra un mensaje de “Transacción exitosa”



// destinatarios activos:
const user1 = 11111111;
const user2 = 22222222;
const user3 = 33333333;
const user4 = 44444444;
// var activeUsersList = ; ?????
// monto actual en cuenta usuario 1
var currentAmountCounts_User1 = 50000;
// info solicidata al usuario:
var idUser = prompt('Ingresa tu nombre');
var amountTransfer = parseInt(prompt('Ingresa el monto a transferir'));
var addresseeTransfer = parseInt(prompt('Ingresa el DNI del destinatario'));
var transferOk = validations(amountTransfer, addresseeTransfer);

function validations(amountTransfer, addresseeTransfer) {
    if (amountTransfer > currentAmountCounts_User1) {
        return 'fondos insuficientes en su cuenta para realizar esta transferencia.';
    }
    
    if ((addresseeTransfer !== user1) && (addresseeTransfer !== user2) && (addresseeTransfer !== user3) && (addresseeTransfer !== user4)) {
        return 'por favor verifique los datos e ingrese un destinatario correcto.';
    }

    return 'Transacción exitosa';
}

alert('Hola ' + idUser + ', ' + transferOk);