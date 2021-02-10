// Llamados a APIs

//1. escribir una función para cada petición de API
//2. escribir async antes de la lista de parametros en la función del punto 1 
//3. encerrar los llamados a fetch en try catch 
//4. donde usemos funciones del punto 1 escribimos async también en la función contenedora antes de la lista  de parametros 
//5. cuando llamemos a una función del punto 1 ponemos await 
//6. celebrar con los datos :) 

const llamarApiImagenes = async (apiUrl) => {
    try {
        const imagenes = await fetch(apiUrl);
        return imagenes.json();
    } catch (error) {
        console.log('ocurrió un error', error);
    }
}

// handler callback
document.addEventListener('DOMContentLoaded', async() => {

    const API_URL = '';
    const imagesData = await llamarApiImagenes(API_URL); //(ejemplo API_URL -> Notación SnakeUppercase para datos quemados que no cambian)
    pintarImgs(imagesData);
    
});
