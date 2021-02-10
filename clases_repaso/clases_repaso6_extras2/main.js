//  Use the `setAttribute` method to change the value of the identity 
// attribute (id) from navBar to bankingTopNavigation.

const changeId = document.querySelector('#navBar');
changeId.setAttribute("id", "bankingTopNavigation");


// Create a new element of type `li`. 
// Create a new text node with the contents "ACH/Wire Transfer." 
// Append the text node to the newly created list node. 
// Finally, append this updated list node to the unordered list using the `appendChild` method.

const containerBankUl = document.querySelector('ul'); 

const paintNewLiUlBank = (padre) => {
    const newLiBank = document.createElement("li")
    const newTextLi = document.createTextNode("ACH/Wire Transfer.");
    newLiBank.appendChild(newTextLi);
    padre.appendChild(newLiBank);
} 
paintNewLiUlBank(containerBankUl);

// Use the `firstChild` and the `lastChild` properties to get hold 
// of the first and last `li` elements under the parent `ul` node. 
// Display the contents between the anchor tags for both the children 
// (Hint: nodeValue property).



const newTemplate = (fc, lc) => {
    const containerDiv = document.querySelector('#navBar');
    const newP = document.createElement("p");
    newP.innerHTML = `${fc.nodeValue} - ${lc.nodeValue}`
    containerDiv.appendChild(newP);
    
}

const firstCh = containerBankUl.firstElementChild;
const lastCh = containerBankUl.lastElementChild;
newTemplate(firstCh, lastCh);



// o para creear exactamente los li con los anchors 
const newTemplate = (fc,lc) => {
    const containerDiv = document.querySelector('#navBar');
    const newUl = document.createElement("ul");
    const newLi = document.createElement("li");
    newLi.innerHTML = `<a href="#">${fc.textContent}</a>`
    const newLi2 = document.createElement("li");
    newLi2.innerHTML = `<a href="#">${lc.textContent}</a>`
    newUl.append(newLi,newLi2);
    containerDiv.appendChild(newUl);
}