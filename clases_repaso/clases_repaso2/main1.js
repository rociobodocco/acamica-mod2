// const urls = [
//     "https://images.dog.ceo/breeds/terrier-american/n02093428_5635.jpg",
//     "https://images.dog.ceo/breeds/stbernard/n02109525_1624.jpg",
//     "https://images.dog.ceo/breeds/groenendael/n02105056_3123.jpg",
//     "https://images.dog.ceo/breeds/terrier-russell/iguet5.jpeg",
//     "https://images.dog.ceo/breeds/hound-walker/n02089867_1438.jpg",
//     "https://images.dog.ceo/breeds/cattledog-australian/IMG_1688.jpg",
//     "https://images.dog.ceo/breeds/brabancon/n02112706_1237.jpg",
//     "https://images.dog.ceo/breeds/otterhound/n02091635_335.jpg",
//     "https://images.dog.ceo/breeds/pug/n02110958_11632.jpg",
//     "https://images.dog.ceo/breeds/cairn/n02096177_11295.jpg",
//   ];

// // Código Imperativo
// for(let index = 0; i = 10; i++) {

//     // console.log(index);
// }

// // Código Declarativo - ok
// urls.forEach((value) => {
//     console.log(value.toUpperCase()); //anónima sin nombre
// });

// o se escribe como función a parte
// const printElement = (value) => {
//     console.log(value.toUpperCase());
// }

// urls.forEach(printElement);



//1. imprimir la suma en el formato de acumulado
/*      Index  Value   C
counter = 0  +  1   =  1
counter = 1  +  2   =  3
counter = 2  +  3   =  6
counter = 3  +  4   =  10

"Total = 10"
*/
// Rspta Ro
// const arrayNums = [1, 2, 3, 4];
//         // Index   0  1  2  3
// let counter = 0;

// arrayNums.forEach((value, index) => {
//         console.log(`couter = ${counter} + ${value} = ${counter + value}`);
//         counter += value;
// });
// console.log(`Total = ` + counter);

//Rspta Mariano:
// const array = [1,2,3,4,7];
// let counter = 0;
// let counterAux = 0;
// array.forEach((value,index) => {
//     if (index == 0){
//         counter+= value
//         console.log('counter = ' + counterAux + '+' + value + '=' + counter)
//         counterAux = counter
//     }else{
//         counterAux+=value
//         console.log('counter = ' + counter + '+' + value + '=' + counterAux)
//         counter+=value
//     }
// })
// console.log('el valor de la suma es ' + counter)



// ---------------------------------------
/*
dado un array de objetos contar cuantos son numeros y cuantos strings
Ej: ["dany",1] - hay 1 numero y 1 string
*/
// const arrayCompuesto = [10, 'jose', 'ro', 'blanco', 110, 'gon', 2];
// let stringsCount = 0;
// let numsCount = 0;
// arrayCompuesto.forEach((value) => {
//     if (typeof(value) == "number") {
//         numsCount++
//     } else if (typeof(value) == "string") {
//         stringsCount++
//     }
// });
// console.log(`Hay ${numsCount} numeros y ${stringsCount} strings`);



// --------------------------
/*
dado un array de urls crear otro arrego de templates de <img src='url'>
["google.com","yahoo.com"]
["<img src='google.com'>", "<img src='yahoo.com'>"]
*/

// const arrayUrls = ["google.com","yahoo.com"];
// const imgTemplates = [];

// arrayUrls.forEach((value) => {
//         imgTemplates.push(`<img src='${value}'>`);
// });

// console.log(imgTemplates);



// ------------------------
/*
dado un arrego [1,2,3,4]
crear otro invertido [4,3,2,1]
*/
// const arrayNums1 = [1,2,3,4];

// const invertirArray = (array) => {
//         return array.reverse();
// }
// console.log(invertirArray(arrayNums1));

// otra forma con forEach:



//1. imprimir la suma en el formato de acumulado
  /* 
  counter = 0 + 1 = 1
  counter = 1 +  2 = 3
  counter = 3 + 3 = 6
  counter = 6 + 4 = 10
  //"valor de la suma = 10"
  */
  /*
  dado un array de objetos contar cuantos son numeros y cuantos strings
  ["dany",1]
  hay 1 numero y 1 string
  */
  /*
  dado un array de urls crear otro arrego de templates de <img src='url'>
  ["google.com","yahoo.com"]
  ["<img src='google.com'>", "<img src='yahoo.com'>"]
  */
  /*
  dado un arrego [1,2,3,4]
  crear otro invertido [4,3,2,1]
  */
 const imgTemplates = []
 urls.forEach((value)=> {
   imgTemplates.push(`<img src='${value}'>`)
 })
 const imgTemplates2 = urls.map((value) => {
   return `<img src='${value}'>` 
 })


 
 const arrayPrueba = [1,2,3,4];                    
 const invertirArrayForeach = (array) => {
   const arrayPruebaInvertido = [];
   array.forEach((value,indice) => {
     arrayPruebaInvertido[(array.length - 1) - indice] = value
   }) 
   return arrayPruebaInvertido 
 };
 alert(invertirArrayForeach(arrayPrueba))
 const invertirArray = (array) => {
   // metodo ppropio de array
   return array.reverse()
 }
 console.log(invertirArray(arrayPrueba))










