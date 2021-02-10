//Night Mode

const bodyContainer = document.querySelector("body");
const jumboSection = document.querySelector("main[role=main] > .jumbotron");
const divAlbum = document.querySelector("main[role=main] > .album");
const elementsNigthMode = [bodyContainer, jumboSection, divAlbum];
elementsNigthMode.forEach(el => {
  el.classList.toggle("night-mode");
});

// ----------------------------------------------------------------------------------------

const parentTrending = document.querySelector(".container-trending");
const trendingUrls = api_response.data.map(img => {
  return img.images.fixed_height.url;
});
const renderTrendingGifs = (parent) => {
  api_response.data.forEach(img => {
    const parentTemplate = document.createElement("div");
    parentTemplate.classList.add("col-md-4")
    parentTemplate.innerHTML = `
    <div class="card mb-4 box-shadow">
    <img class="card-img-top" src=‘${img.images.fixed_height.url}’ alt="Card image cap">
    <div class="card-body">
      <p class="card-text">${img.title}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">${img.username}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>`
    parent.appendChild(parentTemplate)
  })
}
renderTrendingGifs(parentTrending);



// ----------------------------------------------
// --------------------------------------------

const dogs_response = {
  "message": ["https:\/\/images.dog.ceo\/breeds\/chihuahua\/n02085620_3485.jpg",
    "https:\/\/images.dog.ceo\/breeds\/african\/n02116738_291.jpg",
    "https:\/\/images.dog.ceo\/breeds\/leonberg\/n02111129_74.jpg",
    "https:\/\/images.dog.ceo\/breeds\/maltese\/n02085936_7941.jpg",
    "https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_1614.jpg",
    "https:\/\/images.dog.ceo\/breeds\/beagle\/n02088364_7324.jpg",
    "https:\/\/images.dog.ceo\/breeds\/hound-basset\/n02088238_10757.jpg",
    "https:\/\/images.dog.ceo\/breeds\/kelpie\/n02105412_6770.jpg",
    "https:\/\/images.dog.ceo\/breeds\/basenji\/n02110806_1514.jpg",
    "https:\/\/images.dog.ceo\/breeds\/saluki\/n02091831_1512.jpg",
    "https:\/\/images.dog.ceo\/breeds\/airedale\/n02096051_8385.jpg",
    "https:\/\/images.dog.ceo\/breeds\/australian-shepherd\/pepper.jpg",
    "https:\/\/images.dog.ceo\/breeds\/weimaraner\/n02092339_5329.jpg",
    "https:\/\/images.dog.ceo\/breeds\/brabancon\/n02112706_292.jpg",
    "https:\/\/images.dog.ceo\/breeds\/pointer-germanlonghair\/hans3.jpg",
    "https:\/\/images.dog.ceo\/breeds\/cockapoo\/bubbles1.jpg",
    "https:\/\/images.dog.ceo\/breeds\/doberman\/n02107142_248.jpg",
    "https:\/\/images.dog.ceo\/breeds\/maltese\/n02085936_22439.jpg",
    "https:\/\/images.dog.ceo\/breeds\/schipperke\/n02104365_6930.jpg",
    "https:\/\/images.dog.ceo\/breeds\/hound-afghan\/n02088094_1126.jpg",
    "https:\/\/images.dog.ceo\/breeds\/vizsla\/n02100583_10358.jpg",
    "https:\/\/images.dog.ceo\/breeds\/poodle-toy\/n02113624_1293.jpg",
    "https:\/\/images.dog.ceo\/breeds\/cockapoo\/bubbles1.jpg",
    "https:\/\/images.dog.ceo\/breeds\/bluetick\/n02088632_255.jpg",
    "https:\/\/images.dog.ceo\/breeds\/saluki\/n02091831_1852.jpg",
    "https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_6232.jpg",
    "https:\/\/images.dog.ceo\/breeds\/entlebucher\/n02108000_324.jpg",
    "https:\/\/images.dog.ceo\/breeds\/brabancon\/n02112706_600.jpg",
    "https:\/\/images.dog.ceo\/breeds\/chow\/n02112137_11938.jpg",
    "https:\/\/images.dog.ceo\/breeds\/terrier-irish\/n02093991_3905.jpg",
    "https:\/\/images.dog.ceo\/breeds\/terrier-kerryblue\/n02093859_3098.jpg",
    "https:\/\/images.dog.ceo\/breeds\/mastiff-tibetan\/n02108551_5547.jpg",
    "https:\/\/images.dog.ceo\/breeds\/bulldog-boston\/n02096585_1403.jpg",
    "https:\/\/images.dog.ceo\/breeds\/hound-walker\/n02089867_2061.jpg",
    "https:\/\/images.dog.ceo\/breeds\/frise-bichon\/7.jpg",
    "https:\/\/images.dog.ceo\/breeds\/doberman\/n02107142_11757.jpg",
    "https:\/\/images.dog.ceo\/breeds\/sheepdog-shetland\/n02105855_3672.jpg",
    "https:\/\/images.dog.ceo\/breeds\/mastiff-bull\/n02108422_2111.jpg",
    "https:\/\/images.dog.ceo\/breeds\/setter-irish\/n02100877_4159.jpg",
    "https:\/\/images.dog.ceo\/breeds\/bulldog-french\/n02108915_341.jpg",
    "https:\/\/images.dog.ceo\/breeds\/dachshund\/dachshund-6.jpg",
    "https:\/\/images.dog.ceo\/breeds\/hound-basset\/n02088238_10110.jpg",
    "https:\/\/images.dog.ceo\/breeds\/buhund-norwegian\/hakon3.jpg",
    "https:\/\/images.dog.ceo\/breeds\/malinois\/n02105162_1366.jpg",
    "https:\/\/images.dog.ceo\/breeds\/stbernard\/n02109525_2770.jpg",
    "https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_8279.jpg",
    "https:\/\/images.dog.ceo\/breeds\/chow\/n02112137_2250.jpg",
    "https:\/\/images.dog.ceo\/breeds\/retriever-chesapeake\/n02099849_1740.jpg",
    "https:\/\/images.dog.ceo\/breeds\/spaniel-blenheim\/n02086646_4024.jpg",
    "https:\/\/images.dog.ceo\/breeds\/collie-border\/n02106166_950.jpg"],
  "status": "success"
}
//<div class="contenedor-un-perro borde-rojo">
//<img class ="border-violet" src ="perro.png">
//</div>
//1. identificar el contenedor padre de los nuevos elementos
const contenedorImgsPerros = document.querySelector(".container-dogs");
//2. escribir una funcion que reciba ese padre y pinte los nuevos elementos
//3. crear el elemento nuevo base  o padre de los nuevos
//4. agregar clases si es necesario al elemento base del punto 3
//5. agregar el contenido dinamico al elem base del punto 3 con innerHTML
// copiar y pegar todo el contenido dentro de backticks
//6. iterar sobre los datos del api
//7. cortar todo el codigo de nuevo perro o base dentro del foreach
//8. usar el operador signodolar {} ${} y ubicar los datos correspondientes
//9. agregar el nuevo elemento o base al contenedor padre con appendChild
//10. llamar a la funcion del punto 1 con el respectivo padre contenedor
//11. celebrar la victoria
const pintarPerros = (padre) => {
  dogs_response.message.forEach(perroUrl => {
    const nuevoPerro = document.createElement("div");
    nuevoPerro.classList.add("contenedor-un-perro");
    nuevoPerro.classList.add("borde-rojo");
    nuevoPerro.innerHTML = `<img class ="border-violet" src ="${perroUrl}">`
    padre.appendChild(nuevoPerro);
  })
}
pintarPerros(contenedorImgsPerros);
document.querySelectorAll(".border-violet").forEach(img => {
  img.classList.remove("border-violet")
});