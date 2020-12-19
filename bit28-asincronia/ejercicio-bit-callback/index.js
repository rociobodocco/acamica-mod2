// SINCRONICO
// console.log('Primero'); 
// console.log('Segundo');
// console.log('Tercero');

// ASINCRONICO
// console.log('Primero');
// setTimeout(_ => { console.log('Segundo');},10);
// console.log('Tercero');

// Istrucción setTimeout() que difiere la ejecución x milisegundos.

// ---------------------------------------------------------------------------

// Una función callback es una función de primer nivel 
// que se pasa a otra función como variable y 
// ésta es ejecutada en algún punto de la ejecución 
// de la función que la recibe.

// const callback = () => {
//    console.log('Llamando a mi callback');
//  }
 
//  function otraFuncion(callback) {
//    console.log('Ejecutando otra funcion');
//    callback();
//  }

//  -------------------------------------------------------------------------

//  //Funcion anonima que funciona como callback
//  function otraFuncionAnonima(() => {
//    console.log('Llamando a un callback anonimo');
//  });

//  const stations = [{id: 1, name: "Pardo"}, {id: 2, name: "Benavides"}];
// // Map, reduce y Filter son clasicos ejemplos de callback,
// // donde se delega la lógica detrás del map a una función externa haciéndo 
// // reutilizable el código 
// const stationNames = stations.map((station) => { 
//   return station.name;
// });

// ---------------------------------------------------------------------------

// Callback Hell
// Usar correctamente los callbacks a 
// veces puede ser poco intuitivo y puede derivar 
// en situaciones como las siguientes:
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})