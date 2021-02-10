const iceCreams = [
  { flavor: 'pineapple', color: 'white' },
  { flavor: 'strawberry', color: 'red' },
  { flavor: 'watermelon', color: 'red' },
  { flavor: 'kiwi', color: 'green' },
  { flavor: 'mango', color: 'yellow' },
  { flavor: 'pear', color: 'green' }
];


// // transformar la key flavor en mayus y agregar key nueva con la primer letra de flavor en mayus
// const iceCreams2 = iceCreams.map((ic)=> {
//   const upperCaseFlavor = ic.flavor.toUpperCase()
//   return {
//      flavor: upperCaseFlavor,
//      color: ic.color,
//      fl: upperCaseFlavor[0]
//   }
// })
// console.log(iceCreams2);

// // crear un nuevo array con una nueva key en cada obj con precio random entre min 1 y max declarado en el console agregando key nueva "price"
// const addPrice = (arr, maxPrice) => {
//       return  arr.map ((ic) => {
//           const numRamdom = Math.floor(Math.random() * maxPrice  + 1);
//           const repeat = false;

//           arr.forEach(value => {
//             if (value == numRamdom) {
//               repeat = true;
//             } 
//           });

//           if (repeat == false) {
//             return {
//               flavor: ic.flavor,
//               color: ic.color,
//               price: numRamdom
//           }
//         }
          
//       })
// }
// console.log(addPrice(iceCreams, 100));


// ejercicio para casa evitar repeticiones en random

const addPrice = (arr, maxPrice) => {
  return  arr.map ((ic) => {
    const numRamdom = Math.floor(Math.random() * maxPrice  + 1);
    // const repeat = false;
      // if (value != numNoRepeat) {
      return {
        flavor: ic.flavor,
        color: ic.color,
        price: numRamdom
      }
    })
}      
        // arr.forEach(value => {
        //   if (value == numRamdom) {
        //     repeat = true;
        //   } 
      // });

          // if (repeat == false) {
            
        // }

console.log(addPrice(iceCreams, 100));

// const randomNoRepeat = (arr2) => {
//   const numNoRepeat = numRamdom;
//   arr2.forEach(value => {
//     if (value != numNoRepeat) {
//       return {
//         price: numNoRepeat
//       };
//     }

//   });
// }

// console.log(randomNoRepeat(addPrice));

// const iceCreamsWithPrice = addPrice(iceCreams,100);
// //array con todos los helados con precio >= 50
// const icOver50Filter = iceCreamsWithPrice.filter((ic)=> {
//   return ic.price < -1;
// })
// console.log(iceCreamsWithPrice);
// // find
// [1,2,3,4,5,6,7,8,9,10].filter (i => {
//   return i >=5
// })
// // [5,6,7,8,9,10]
// [1,2,3,4,5,6,7,8,9,10].find (i => {
//   return i >=5
// })
// //5