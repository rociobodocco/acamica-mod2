let nameInput = document.getElementById('name');
let buttonInput = document.getElementById('buttonName');
let list = document.getElementById('lista');

nameInput.addEventListener('keydown', function(event) { // enter al input para agregar 
   if (event.keyCode == 13) {
       console.log(event);
        let li = document.createElement('li');
        li.innerHTML = nameInput.value;
        list.appendChild(li);
   }
});  


buttonInput.addEventListener('click', function() {
    //list.innerHTML += '<li>'+text.velue+'</li>'
   let li = document.createElement('li'); //crear un nodo nuevo -> etiqueta
   li.innerHTML = nameInput.value; // le doy valor del input al li
    // appendChild -> Agrega un nuevo nodo al final de la lista de un 
    // elemento hijo de un elemento padre especificado.
   list.appendChild(li);
});  
