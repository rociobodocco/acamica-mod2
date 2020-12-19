// var myPromise = new Promise((resolve, reject) => {
  
//   //Instrucciones que se van a ejecutar 

//  if(/* Termino correctamente */) {
//    resolve('Success!');
//  } else {
//     reject('Failure!');
//  }
// });

// myPromise.then(function() { 
//   /* hacer algo mas cuando la promesa sea resuelta */
// }).catch(function() {
//   /* capturar el error */
// })


// -----------------------------------------------------------


const get = url => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', _ => {
      if (xhr.status !== 200) {
        reject(new Error(xhr.statusText));
      }
      resolve(xhr.response);
    });
    
    xhr.open('GET', url);
    xhr.send();
  }
}

get('story.json').then(response => {
  console.log("Success!", response);
}).catch(error => {
  console.error("Failed!", error);
});

// Los promises son una mejor forma de encapsular la lógica asíncrona 
// logrando evitar tener que anidar callbacks
//  y haciendo mucho más legible nuestro código y menos propenso a errores.