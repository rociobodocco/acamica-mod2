// let newItem = document.getElementById('headerMenu');
// newItem.innerHTML += '<li>Item 5<li>'

// let stronger = document.getElementById('strong');
// stronger.style.fontWeight = 'bold'

// let interval = setInterval(intervalo, 5000);

// function intervalo(){
//     let image1 = document.getElementById('image1');
//     image1.src = 'https://www.40defiebre.com/wp-content/uploads/2015/10/imagenes.png';
// }


// let changePosition = document.getElementById('imageRight');
// changePosition.style.order = 0


// Al pasar por encima del logo con el
// mouse crea un borde con sobre él.
// Añade una clase con el mouseover y
// quitala con el mouseout.

let logo= document.getElementById('logo');
logo.addEventListener ( 'mouseover', mouseover )
logo.addEventListener ( 'mouseout', mouseout )

function mouseover(){
    logo.style.borderColor= 'red';
}

function mouseout (){
    logo.style.borderColor= 'black';
}

// Con el click en el título pide al
// usuario que ingrese un texto a
// través de prompt.
// - Reemplaza el título existente
// por el que ingresó el usuario.
// - Almacena el título ingresado en
// el local storage
// - Muestra siempre el último
// título ingresado (reinicia el
// navegador para probar)


let title = document.getElementById('mainTitle');

title.addEventListener('click', function() {
   let newTitle = prompt('Ingrese un nuevo título');
    if (title != newTitle) 
    { title.innerHTML = newTitle 
        localStorage.setItem('mainTitle', 'newTitle');
        var traer_datos = localStorage.getItem(newTitle); // llamar al valor almacenado
        console.log(traer_datos); // imprime el valor almacenado
        // En este punto puedo reiniciar el navegador que siempre va a traer el valor que haya 
        // almacenadolocalStorage.removeItem("nombre"); 
        //eliminó definitivamente 
    }
});


// Duplica la fila de de 2 imágenes y 2 nombres con el click en ‘Ver más’.

let buttonViewMore = document.getElementById('viewMore');
let container = document.getElementById('imageContainer');  

buttonViewMore.addEventListener('click', function() {
    container.innerHTML += document.container;
 });