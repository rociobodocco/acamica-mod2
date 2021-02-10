

const changeColor = (ev) => {
    ev.target.classList.toggle('rojo');
}
const removeColor = (ev) => {
    ev.target.classList.toggle('rojo');
}

const showModal = (ev) => {
    document.querySelector("#modal img").src = ev.target.src
    document.querySelector("#modal").classList.add("show");
}

const closeModal = (ev) => {
    const xClickeada = ev.target;
    xClickeada.closest('#modal').classList.remove('show');
}

// const getRandomImgs = () => {
//     return Math.floor(Math.random());
// }
// getRandomInt(imagesData)

const containerImages = document.querySelector('#container-images');
const pintarImgs = (imagenes) => {
    
    imagenes.forEach(img => {
        imagesData.length = 2;

        const divBase = document.createElement('div');
        divBase.classList.add('single-img');
        divBase.innerHTML = `<img src="${img.download_url}">
                            <span>${img.author}</span>
                            <a href="${img.url}" target ="_blank">Go to image</a>`

        containerImages.appendChild(divBase);

        divBase.querySelector("a").addEventListener("mouseover", changeColor);
        divBase.querySelector("a").addEventListener("mouseout", removeColor);
        divBase.querySelector("img").addEventListener("click", showModal);

        

        // Editar el nombre del autor cambiando el texto por un input en el evento click 
        // y volviento a <p> cuando se presione enter
        divBase.querySelectorAll('.single-img span').forEach(editText => {
            editText.addEventListener("click", () => {
                const spanEditable = document.querySelector('.single-img span');
                const newInputAuthor = document.createElement('input');
                newInputAuthor.value = spanEditable.textContent;
                spanEditable.replaceWith(document.querySelector('.single-img').appendChild(newInputAuthor));
                newInputAuthor.select();


                newInputAuthor.addEventListener('keypress', (ev => {
                    if (ev.key === 'Enter') {
                        const spanEditable = document.querySelector('.single-img span');
                        spanEditable.textContent =  newInputAuthor.value;
                        newInputAuthor.replaceWith(document.querySelector('.single-img').appendChild(spanEditable));
                    }
                }))
            })
        })
    });

    const addCardBtn = document.createElement('button');
    addCardBtn.classList.add('addCardBtn');
    addCardBtn.textContent = 'VER MÁS';
    containerImages.appendChild(addCardBtn);
    
    addCardBtn.addEventListener("click", semMoreBtn);
    
}

// Completar el modal box con cierre
const containerModal = document.querySelector('#modal');
const addCloseBtn = (padre) => {
    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close-btn");
    const newTextSpan = document.createTextNode("X");
    closeBtn.appendChild(newTextSpan);
    padre.appendChild(closeBtn);
}
addCloseBtn(containerModal);

document.querySelectorAll('#modal').forEach(card => {
    card.addEventListener("click", closeModal);
});


// Cargar solo de a 2 imagenes al inicio y un boton al final 
// que diga ver mas y cargar las siguientes 2 imagenes
const semMoreBtn = (ev => {
    const xClickeada1 = ev.target;
    pintarImgs(xClickeada1);
    containerImages.appendChild(document.querySelector('.single-img'));
});



