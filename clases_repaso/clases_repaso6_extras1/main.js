// Write the code necessary to do the following:
// 1. Select the section with an id of container without using querySelector.

const containerSelect = document.getElementById('container');


// 2. Select the section with an id of container using querySelector.

const containerSelect1 = document.querySelector('#container');


// 3. Select all of the list items with a class of “second”.

const elementsClassSecond = document.querySelectorAll('.second');


// 4. Select a list item with a class of third, but only the list item inside of the ol tag.

const elementThirdOl = document.querySelector('ol .third');


// 5. Give the section with an id of container the text “Hello!“.

// const containerSelect2 = document.querySelector('#container');
// containerSelect2.innerHTML = `¡Hola!`;



// 6. Add the class main to the div with a class of footer.

const footerNewClass = document.querySelector('.footer');
footerNewClass.classList.add('main');


// 7. Remove the class main on the div with a class of footer.

const footerNewClassRemove = document.querySelector('.footer');
footerNewClassRemove.classList.toggle('main');


// 8. Create a new li element.
// 9. Give the li the text “four”.
// 10. Append the li to the ul element.

const containerLiUl = document.querySelector('ul');
const containerLiOl = document.querySelector('ol');

const paintNewLiUl = (padre) => {
    const newLi = document.createElement("li");
    newLi.classList.add("four");
    newLi.innerHTML = `<li>four</li>`
    padre.appendChild(newLi);
} 
paintNewLiUl(containerLiUl);
paintNewLiUl(containerLiOl); //me queda el número del Ol super puesto 4 y 5 

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.

const backgroundGreen = document.querySelectorAll('ol li');
backgroundGreen.forEach(el => {
    el.style.background = 'green';
});

// 12. Remove the div with a class of footer.

const removeFooter = document.querySelector('.footer').remove();


