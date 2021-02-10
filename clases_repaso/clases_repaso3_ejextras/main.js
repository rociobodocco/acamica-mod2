// Ejemplos de recorridos forEach anidados
// const letraAB = ['a', 'b'];
// const letraCD = ['c', 'd'];

// letraAB.forEach(let1 => {
//   letraCD.forEach(let2 => {
    
//     console.log(`${let1}-${let2}`);
//   });
// });



// Write a function called doubleValues which accepts an array 
// and returns a new array with all the values in the array passed to the function doubled
// Examples:
//     doubleValues([1,2,3]) // [2,4,6]
//     doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

// const values1 = [1,2,3];
// const doubleValues1 = [];
// const values2 = [5,1,2,3,10];
// const doubleValues2 = [];

// values1.forEach(values => {
//   doubleValues1.push(values*2);
// });

// console.log(doubleValues1);

// values2.forEach(values => {
//   doubleValues2.push(values*2);
// });

// console.log(doubleValues2);


//Mejor Solución:
// function doubleValues(array){
//   return array.map(function(value) {
//       return value * 2;
//      })
//  }
//  const resultado = doubleValues([5,1,2,3,10])
//  console.log(resultado);


//---------------------------------------------------------
// Write a function called showFirstAndLast which accepts an array of strings 
// and returns a new array with only the first and last character of each string.
// Examples:
//     showFirstAndLast(['colt','matt', 'tim', 'udemy']) // [“ct”, “mt”, “tm”, “uy”]
//     showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

// const cadena1 = ['colt','matt', 'tim', 'udemy'];
// const showFirstAndLast1 = [];
// const cadena2 = ['hi', 'goodbye', 'smile'];
// const showFirstAndLast2 = [];

// cadena1.forEach(values => {
//   showFirstAndLast1.push(values.charAt(0) + values.charAt(values.length -1)); 
// });

// console.log(showFirstAndLast1);

// cadena2.forEach(values => {
//   showFirstAndLast2.push(values.charAt(0) + values.charAt(values.length -1));
// });

// console.log(showFirstAndLast2);

// Solucion con función reutilizable:  // PENDIENTE VER VIDEO Y COMPLETAR
// const showFirstAndLast = (arr) => {
//   const newArray = [];
//   arr.forEach(value => {
//     newArray.push(value[0] + value[value.length-1])
//   })
//   return newArray;
// }


// El método charAt() de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
// Los caracteres de una cadena se indexan de izquierda a derecha. El índice del primer caracter es 0, 
// y el índice del último caracter en una cadena llamada nombreCadena es nombreCadena.length - 1. 
// Si el indice que usted proporciona está fuera del rango, JavaScript devuelve una cadena vacía.



//------------------------------------------------------------------------------------
// Write a function called addKeyAndValue which accepts an array of objects, a key, 
// and a value and returns the array passed to the function with the new key 
// and value added for each object
// Examples:
//     addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')

//     [{name: 'Elie', title:'instructor'}, 
//      {name: 'Tim', title:'instructor'}, 
//      {name: 'Matt', title:'instructor'}, 
//      {name: 'Colt', title:'instructor'}]


// const addKeyAndValue = (arr) => {
//   const newArray = [];
//   arr.forEach(value => {
//     newArray.push(Object.assign(value,{title: 'instructor'}));
//   })
//   return arr;
// }
// console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));

//Soluciones correctas:
// const addKeyAndValue = (arr, key, value) => {
//   for (i = 0; i < arr.length; i++) {
//     obj = arr[i];
//     obj[key] = value;
//   }
//   return arr;
//   }
//  console.log(addKeyAndValue([{name:'Fede'},{name:'Nico'},{name:'Paula'}], 'Country', 'Argentina'));


// Otra Solución:
// const names = [
//   {name: 'Elie'},
//   {name: 'Tim'}, 
//   {name: 'Matt'}, 
//   {name: 'Colt'}
// ]
// const addKeyAndValue = (arr, key, value) => {
//   arr.forEach(object => {
//     object[key] = value
//     })
//   console.log(arr)
//   return arr
// }
// addKeyAndValue(names, 'title', 'instructor')


//------------------------------------------------------------------------------------
// Write a function called vowelCount which accepts a string and returns 
// an object with the keys as the vowel and the values as the number 
// of times the vowel appears in the string. This function should be 
// case insensitive so a lowercase letter and uppercase letter should count
// Examples:
//     vowelCount('Elie') // {e:2,i:1};
//     vowelCount('Tim') // {i:1};
//     vowelCount('Matt') // {a:1})
//     vowelCount('hmmm') // {};
//     vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

const cadenaVocales = "aeiou".split(''); //REVISAR TODO ESTA FORMA 
const strings = prompt('Ingrese algo');
const newObjVowelCount = {};

const vowelCount = str => {
  strings.forEach((value) => {
    if (str === String) {
      const numVowelsString = strings.indexOf(value.charAt(0) != -1);
      vowelCount.push(Object.defineProperties(newObjVowelCount, 'key',  {
        "key" : numVowelsString
      }) );
    }
  });
}

console.log(newObjVowelCount);

// Soluciones correctas:
// const vowelCount = str => {
//   const splitString=str.split('');
//   const obj={};
//   const vowels="aeiou";
//   splitString.forEach((letter)=>{
//     if(vowels.indexOf(letter.toLowerCase())!==-1){
//       if(letter in obj){
//         obj[letter]++;
//       }else{
//         obj[letter]=1;
//       }
//     }   
//  });
//  return obj;    
// }
// console.log(vowelCount('Federico'));


//Otra solución:
// const vowels = 'aeiou'.split('');
// const vowelsInString = {};
// const vowelCount = (str) => {
//   vowels.forEach(vowel => {
//     vowelsInString[vowel] = 0
//     const stringDivided = str.toLowerCase().split('')
//     stringDivided.forEach(letter => {
//       if (letter === vowel) {
//         vowelsInString[vowel]++
//       }
//     })
//   })
// }
// console.log(vowelsInString)
// vowelCount("murcielago")







