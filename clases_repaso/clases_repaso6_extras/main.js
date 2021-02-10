// Mostrar cantidad de enlaces que hay en la página

const totalLinks = document.anchors.length;

const newContent = (value) => {
    document.getElementById("num_enlaces").innerHTML = value;
}

newContent(totalLinks);


// Mostrar en 'p' el nombre y el mail ingresados en input:

const showInput = () => {
    const inputName = document.querySelector('#name').value;
    const inputMail = document.querySelector('#email').value;
    document.querySelector('#mostrarNombre').innerHTML= inputName;
    document.querySelector('#mostrarMail').innerHTML= inputMail;
}

const mostrarInfo =  (ev) =>{
    const inputName = document.querySelector("#name");
    const inputMail = document.querySelector("#email");
    const pName = document.querySelector("#mostrarNombre")
    const pMail = document.querySelector("#mostrarMail")
    pName.innerHTML = inputName.value
    pMail.innerHTML = inputMail.value
  }

  
  const mostrarNameRealTime = (ev) => {
      
    const pName = document.querySelector("#mostrarNombre");
    pName.innerHTML = inputName.value.toUpperCase();
  }
  const buttonInfo = document.querySelectorAll("#mostrarInfo")[0];
  const inputName = document.querySelectorAll("#name")[0];
  buttonInfo.addEventListener('click', mostrarInfo); 
  inputName.addEventListener('keyup', mostrarNameRealTime); //aprieto key y al levantar realiza el evento
  