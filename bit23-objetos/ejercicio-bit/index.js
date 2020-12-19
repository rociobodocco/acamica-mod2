class Aviones { //declarando la clase - nombre con primer letra Mayus
    saludo() { // método (acción)
        return 'Hola a todos' + this.nombre; //acceso a propiedad 
    }
}


// instance (ejemplar) - Objetos creados a partir de una clase:

a319 = new Aviones // nuevo objeto
a319.nombre = 'A319'; // propiedad - el valor se llama "estado"
console.log(a319.saludo()) //Imprime mensaje "Bienvenidos al avión A319"

a340 = new Aviones // nuevo objeto
a340.nombre = 'A340'; // propiedad - el valor se llama "estado"
console.log(a340.saludo()) // Imprime mensaje "Bienvenidos al avión A340" 


// =================================================================================================== //

// Objeto solo sin clase:

// let a319 = {peso: 75000, asientos: 142}; // objeto con propiedades y valores
// console.log(a319.peso); //imprime 75000

// objeto con método (acción) dentro 
// let a340 = {peso: 380000, asientos: 359, msj_bienvenida : function(){return 'Bienvenido a Airbus 380'}}
// console.log(a340.msj_bienvenida()); // imprime “Bienvenido a Airbus 380”






