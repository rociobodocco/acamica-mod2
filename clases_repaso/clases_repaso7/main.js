// DOM -> FRONTEND
const  dogs_response = {"message":["https:\/\/images.dog.ceo\/breeds\/chihuahua\/n02085620_3485.jpg","https:\/\/images.dog.ceo\/breeds\/african\/n02116738_291.jpg","https:\/\/images.dog.ceo\/breeds\/leonberg\/n02111129_74.jpg","https:\/\/images.dog.ceo\/breeds\/maltese\/n02085936_7941.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_1614.jpg","https:\/\/images.dog.ceo\/breeds\/beagle\/n02088364_7324.jpg","https:\/\/images.dog.ceo\/breeds\/hound-basset\/n02088238_10757.jpg","https:\/\/images.dog.ceo\/breeds\/kelpie\/n02105412_6770.jpg","https:\/\/images.dog.ceo\/breeds\/basenji\/n02110806_1514.jpg","https:\/\/images.dog.ceo\/breeds\/saluki\/n02091831_1512.jpg","https:\/\/images.dog.ceo\/breeds\/airedale\/n02096051_8385.jpg","https:\/\/images.dog.ceo\/breeds\/australian-shepherd\/pepper.jpg","https:\/\/images.dog.ceo\/breeds\/weimaraner\/n02092339_5329.jpg","https:\/\/images.dog.ceo\/breeds\/brabancon\/n02112706_292.jpg","https:\/\/images.dog.ceo\/breeds\/pointer-germanlonghair\/hans3.jpg","https:\/\/images.dog.ceo\/breeds\/cockapoo\/bubbles1.jpg","https:\/\/images.dog.ceo\/breeds\/doberman\/n02107142_248.jpg","https:\/\/images.dog.ceo\/breeds\/maltese\/n02085936_22439.jpg","https:\/\/images.dog.ceo\/breeds\/schipperke\/n02104365_6930.jpg","https:\/\/images.dog.ceo\/breeds\/hound-afghan\/n02088094_1126.jpg","https:\/\/images.dog.ceo\/breeds\/vizsla\/n02100583_10358.jpg","https:\/\/images.dog.ceo\/breeds\/poodle-toy\/n02113624_1293.jpg","https:\/\/images.dog.ceo\/breeds\/cockapoo\/bubbles1.jpg","https:\/\/images.dog.ceo\/breeds\/bluetick\/n02088632_255.jpg","https:\/\/images.dog.ceo\/breeds\/saluki\/n02091831_1852.jpg","https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_6232.jpg","https:\/\/images.dog.ceo\/breeds\/entlebucher\/n02108000_324.jpg","https:\/\/images.dog.ceo\/breeds\/brabancon\/n02112706_600.jpg","https:\/\/images.dog.ceo\/breeds\/chow\/n02112137_11938.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-irish\/n02093991_3905.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-kerryblue\/n02093859_3098.jpg","https:\/\/images.dog.ceo\/breeds\/mastiff-tibetan\/n02108551_5547.jpg","https:\/\/images.dog.ceo\/breeds\/bulldog-boston\/n02096585_1403.jpg","https:\/\/images.dog.ceo\/breeds\/hound-walker\/n02089867_2061.jpg","https:\/\/images.dog.ceo\/breeds\/frise-bichon\/7.jpg","https:\/\/images.dog.ceo\/breeds\/doberman\/n02107142_11757.jpg","https:\/\/images.dog.ceo\/breeds\/sheepdog-shetland\/n02105855_3672.jpg","https:\/\/images.dog.ceo\/breeds\/mastiff-bull\/n02108422_2111.jpg","https:\/\/images.dog.ceo\/breeds\/setter-irish\/n02100877_4159.jpg","https:\/\/images.dog.ceo\/breeds\/bulldog-french\/n02108915_341.jpg","https:\/\/images.dog.ceo\/breeds\/dachshund\/dachshund-6.jpg","https:\/\/images.dog.ceo\/breeds\/hound-basset\/n02088238_10110.jpg","https:\/\/images.dog.ceo\/breeds\/buhund-norwegian\/hakon3.jpg","https:\/\/images.dog.ceo\/breeds\/malinois\/n02105162_1366.jpg","https:\/\/images.dog.ceo\/breeds\/stbernard\/n02109525_2770.jpg","https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_8279.jpg","https:\/\/images.dog.ceo\/breeds\/chow\/n02112137_2250.jpg","https:\/\/images.dog.ceo\/breeds\/retriever-chesapeake\/n02099849_1740.jpg","https:\/\/images.dog.ceo\/breeds\/spaniel-blenheim\/n02086646_4024.jpg","https:\/\/images.dog.ceo\/breeds\/collie-border\/n02106166_950.jpg"],"status":"success"}
//1. identificar el contenedor padre de los nuevos elementos
const contenedorCards = document.querySelector(".container-dogs");
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
/**
 *
 *
 * <div class="col-md-4 card-element">
</div>
 */

const cerrarCard = (ev) => {
    const xClickeada = ev.target
    xClickeada.closest('.card-element');
}

const addOneCard =  (parentCards)  => {
    const cardBase = document.createElement('div');
    cardBase.classList.add("col-md-4");
    cardBase.classList.add("card-element");
    cardBase.innerHTML=`<div class="card mb-4 box-shadow">
    <img class="card-img-top" src="https://via.placeholder.com/50" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
      <span class="close-btn">X</span>
    </div>
  </div>`
    parentCards.appendChild(cardBase);
    setTimeout(()=> {
        cardBase.classList.add("card-visible");
    },100)
    
    document.querySelectorAll(".card-element .close-btn").forEach (card => {
        card.addEventListener("click",cerrarCard)
    });
}
const addCardBtn = document.querySelector(".container p .btn.btn-primary.my-2");
addCardBtn.addEventListener("click", (ev)=> {
    const cardContainer = document.querySelector('.row.card-container');
    addOneCard(cardContainer);
});


// forEach = elementos por separado
// map = array de elementos 



