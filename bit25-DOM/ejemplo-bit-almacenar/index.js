// Guardar información permanentemente

// Para guardar información utilizarás setItem donde definirás un nombre y un valor.

// Mediante getItem más el nombre que has definido, obtendrás dicha información.

// removeItem más el nombre te permitirá eliminar la información de forma permanente.

localStorage.setItem("nombre", "Jimena");
var traer_datos = localStorage.getItem("nombre");
console.log(traer_datos); //imprime Jimena//
// En este punto puedo reiniciar el navegador que siempre 
// va a traer el valor que haya 
almacenadolocalStorage.removeItem("nombre"); 
//eliminó definitivamente "Jimena"



// Guardar información momentáneamente

sessionStorage.setItem("nombre", "Jimena");
var traer_datos = sessionStorage.getItem("nombre");
console.log(traer_datos); //imprime Jimena
//Si reinicio el navegador en este punto pierdo el valor "Jimena"
sessionStorage.removeItem("nombre"); 
//eliminó definitivamente "Jimena" de la sesión