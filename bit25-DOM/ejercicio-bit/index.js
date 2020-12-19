//Ejemplo con este código//<div id="msj">Hola a todos</div>
//El usuario en este punto visualiza "Hola a todos"
msj = document.getElementById("msj")
msj.innerHTML = "Estoy cambiando";
//El usuario visualiza "Estoy cambiando"


// Crear Nodo
// nuevo_nodo = document.createElement("span")

// Eliminar nodo
// var parrafo = document.getElementById("p");
// parrafo.remove();

// Reemplazar nodos
// el nodo enviado por parámetro.nuevo_nodo = document.createElement("span")
// var parrafo = document.getElementById("p");
// parrafo.replaceWith(nuevo_nodo);
//reemplaza el <p> por un <span>

// Insertar nodos
//<div id="p">hola</div>
// nuevo_nodo = document.createElement("p")
// var parrafo = document.getElementById("p");
// parrafo.appendChild(nuevo_nodo);
//Resultado: <div id="p">hola<p></p></div>

//<div id="p">hola</div>
// nuevo_nodo = document.createElement("p")
// var parrafo = document.getElementById("p");
// parrafo.insertBefore(nuevo_nodo);
//Resultado: <p><div id="p">hola</div></p>