// var : puedes utilizarlo en cualquier lado. Si cambias su valor, cambiará en todos lados.
// Cada vez que llames a "color", invocarás a su valor (“rojo”) y no el nombre de la variable.

var color = "rojo"
console.log(color); // imprime rojo
var color = 'Verde'; // le asigno un nuevo valor
console.log(color); // imprime Verde


console.log(7 + 5); //imprime 12
var numero1 = 7;
var numero2 = 5;
console.log(numero1 + numero2) //imprime 12


// let : su vida ocurre dentro del bloque que lo esté utilizando 
// y permite cambiar su valor. Es decir, si cambio su valor en otro bloque, no cambiará el bloque original
// Observa el último console.log : vuelve a imprimir 1 . variable_tipo_var sólo valdrá 2 dentro del bloque IF ,
// mientras que fuera de éste valdrá 1 (tal como fue definido en la primera línea).

let variable_tipo_let = 1;
console.log(variable_tipo_let) //imprime 1
if(true){
    let variable_tipo_let = 2;
    console.log(variable_tipo_let) //imprime 2
}
console.log(variable_tipo_let) //imprime 1


// const : se puede definir una única vez y no puedes modificarla luego.

const variable_tipo_const = "hola"
console.log( variable_tipo_const) // imprime hola
variable_tipo_const = "chau"; //genera un error, no se puede modificar su valor.
