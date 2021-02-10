const imagesData = [{ "id": "0", "author": "Alejandro Escamilla", "width": 5616, "height": 3744, "url": "https://unsplash.com/photos/yC-Yzbqy7PY", "download_url": "https://picsum.photos/id/0/5616/3744" }, { "id": "1", "author": "Alejandro Escamilla", "width": 5616, "height": 3744, "url": "https://unsplash.com/photos/LNRyGwIJr5c", "download_url": "https://picsum.photos/id/1/5616/3744" }, { "id": "10", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/6J--NXulQCs", "download_url": "https://picsum.photos/id/10/2500/1667" }, { "id": "100", "author": "Tina Rataj", "width": 2500, "height": 1656, "url": "https://unsplash.com/photos/pwaaqfoMibI", "download_url": "https://picsum.photos/id/100/2500/1656" }, { "id": "1000", "author": "Lukas Budimaier", "width": 5626, "height": 3635, "url": "https://unsplash.com/photos/6cY-FvMlmkQ", "download_url": "https://picsum.photos/id/1000/5626/3635" }, { "id": "1001", "author": "Danielle MacInnes", "width": 5616, "height": 3744, "url": "https://unsplash.com/photos/1DkWWN1dr-s", "download_url": "https://picsum.photos/id/1001/5616/3744" }, { "id": "1002", "author": "NASA", "width": 4312, "height": 2868, "url": "https://unsplash.com/photos/6-jTZysYY_U", "download_url": "https://picsum.photos/id/1002/4312/2868" }, { "id": "1003", "author": "E+N Photographies", "width": 1181, "height": 1772, "url": "https://unsplash.com/photos/GYumuBnTqKc", "download_url": "https://picsum.photos/id/1003/1181/1772" }, { "id": "1004", "author": "Greg Rakozy", "width": 5616, "height": 3744, "url": "https://unsplash.com/photos/SSxIGsySh8o", "download_url": "https://picsum.photos/id/1004/5616/3744" }, { "id": "1005", "author": "Matthew Wiebe", "width": 5760, "height": 3840, "url": "https://unsplash.com/photos/tBtuxtLvAZs", "download_url": "https://picsum.photos/id/1005/5760/3840" }];


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
const pintarImgs = () => {
    
    imagesData.forEach(img => {
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



// handler callback
document.addEventListener('DOMContentLoaded', () => {


    pintarImgs();
});