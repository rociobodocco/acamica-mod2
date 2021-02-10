//1. dar click en el boton get dogs
//2. traer datis del apo de dogs
const sumarUno = (num1, num2) => {
    const num1aumentado = num1 + 1;
    const num2aumentado = num2 + 1;
    return num1aumentado + num2aumentado;
  };
  // 1. ejercicio
  // contar(array) => longitud array
  // traerElemento(array,int) => elemento en esa posicion
  // traerMayusculas (string) => string en mayusculas
  // traerCuadrado (int) => num al cuadrado
  // traerPotencia (int,int) => num elevado a esa potencia
  // traerRaiz2 (int) => raiz cuadrada de num
  const estudiantes = [
    "clara",
    "damian",
    "denise",
    "fede",
    "laura",
    "lautaro",
    "mariano",
    "naomi",
    "Nathali",
    "Ramiro",
  ];
  //console.log(estudiantes[3])
  const traerElemento = (array,indice) => {
    return array[indice]
  };
  const traerMayusculas = (palabra) => {
    return palabra.toUpperCase(); 
  }
  const fede = traerElemento(estudiantes,3)
  //console.log(fede)
  const seleccionadoRandom = (listaEstudiantes) => {
    return listaEstudiantes[Math.floor(Math.random() * listaEstudiantes.length)];
  };
  //alert(seleccionadoRandom(estudiantes));
  // envio ejercicios de funciones 
  const urls = [
    "https://images.dog.ceo/breeds/terrier-american/n02093428_5635.jpg",
    "https://images.dog.ceo/breeds/stbernard/n02109525_1624.jpg",
    "https://images.dog.ceo/breeds/groenendael/n02105056_3123.jpg",
    "https://images.dog.ceo/breeds/terrier-russell/iguet5.jpeg",
    "https://images.dog.ceo/breeds/hound-walker/n02089867_1438.jpg",
    "https://images.dog.ceo/breeds/cattledog-australian/IMG_1688.jpg",
    "https://images.dog.ceo/breeds/brabancon/n02112706_1237.jpg",
    "https://images.dog.ceo/breeds/otterhound/n02091635_335.jpg",
    "https://images.dog.ceo/breeds/pug/n02110958_11632.jpg",
    "https://images.dog.ceo/breeds/cairn/n02096177_11295.jpg"
  ];
  // arrow function
  const traerTemplateImg = (url) => {
    const template = `<img src='${url}'/>`; // -> `<img src='` + url + `'/>`;
    return template
  }; 
  //imperativo 
  for (let index = 0; index <= 10; index++) {
    console.log(index)
  }
  //const imprimirElem = 
  // declarativo
  urls.forEach((value) => {
    console.log(value.toUpperCase())
  })
  