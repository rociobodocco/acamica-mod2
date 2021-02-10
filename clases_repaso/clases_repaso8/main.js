// const mostrarPos = (ev) => {
//     const posParrafo = document.querySelector("#pos");

//     const xPos = ev.clientX;
//     const yPos = ev.clientY;

//     posParrafo.innerHTML = `coordenadas: x:${xPos}, y:${yPos}`;
// }

// const borrarPos = (ev) => {
//     const posParrafo = document.querySelector("#pos");
//     posParrafo.innerHTML = ``;
// }

// const rectanguloDiv = document.querySelector("#rectangulo");
// rectanguloDiv.addEventListener("mousemove", mostrarPos);
// rectanguloDiv.addEventListener("mouseout", borrarPos);


const modificarTam = (ev) => {
    const rectangulo=  document.querySelector("#rectangulo");
    rectangulo.classList.toggle("divGrande");
    }
    const rectanguloDiv = document.querySelector("#rectangulo");
    rectanguloDiv.addEventListener("click",modificarTam);


// ------------------------------------------------------------------------------------------

const imagesData = [{"id":"0","author":"Alejandro Escamilla","width":5616,"height":3744,"url":"https://unsplash.com/photos/yC-Yzbqy7PY","download_url":"https://picsum.photos/id/0/5616/3744"},{"id":"1","author":"Alejandro Escamilla","width":5616,"height":3744,"url":"https://unsplash.com/photos/LNRyGwIJr5c","download_url":"https://picsum.photos/id/1/5616/3744"},{"id":"10","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/6J--NXulQCs","download_url":"https://picsum.photos/id/10/2500/1667"},{"id":"100","author":"Tina Rataj","width":2500,"height":1656,"url":"https://unsplash.com/photos/pwaaqfoMibI","download_url":"https://picsum.photos/id/100/2500/1656"},{"id":"1000","author":"Lukas Budimaier","width":5626,"height":3635,"url":"https://unsplash.com/photos/6cY-FvMlmkQ","download_url":"https://picsum.photos/id/1000/5626/3635"},{"id":"1001","author":"Danielle MacInnes","width":5616,"height":3744,"url":"https://unsplash.com/photos/1DkWWN1dr-s","download_url":"https://picsum.photos/id/1001/5616/3744"},{"id":"1002","author":"NASA","width":4312,"height":2868,"url":"https://unsplash.com/photos/6-jTZysYY_U","download_url":"https://picsum.photos/id/1002/4312/2868"},{"id":"1003","author":"E+N Photographies","width":1181,"height":1772,"url":"https://unsplash.com/photos/GYumuBnTqKc","download_url":"https://picsum.photos/id/1003/1181/1772"},{"id":"1004","author":"Greg Rakozy","width":5616,"height":3744,"url":"https://unsplash.com/photos/SSxIGsySh8o","download_url":"https://picsum.photos/id/1004/5616/3744"},{"id":"1005","author":"Matthew Wiebe","width":5760,"height":3840,"url":"https://unsplash.com/photos/tBtuxtLvAZs","download_url":"https://picsum.photos/id/1005/5760/3840"}];
const changeColor=  (ev) => {
ev.target.classList.toggle('rojo')
}
const removeColor=  (ev) => {
ev.target.classList.toggle('rojo')
}
const pintarImgs = (ev) => {
	
  const containerImages = document.querySelector('#container-images')
  imagesData.forEach( img => {
  const divBase = document.createElement('div');
  divBase.classList.add('single-img');
  divBase.innerHTML = `<div class="single-img">
    <img src="${img.download_url}">
    <span>${img.author}</span>
    <a href="${img.url}" target ="_blank">Go to image</a>
  </div>`
   containerImages.appendChild(divBase);
   divBase.querySelector("a").addEventListener("mouseover",changeColor);
   divBase.querySelector("a").addEventListener("mouseout",removeColor);
 		
  })
}


// esperar a que cargue el DOM y luego llamar a las funciones de la página inicial 
document.addEventListener('DOMContentLoaded',()=> {
pintarImgs();
});