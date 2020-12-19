//mascotas...
class Mascota{
    tamaño= '' ;
    edad=0;
    color='';
    estado_Adopcion='en adoptar';
    raza='';
    getadopcion(){
        return this.estado_Adopcion;
    }
    setadopcion(adopcion){
        this.estado_Adopcion=adopcion;
    }
}
let mascota1=new Mascota();
mascota1.tamaño='mediano';
mascota1.edad=3;
mascota1.raza='labrador';
mascota1.color='marron';
mascota1.setadopcion('adoptado');

let mascota2=new Mascota();
mascota2.tamaño='chico';
mascota2.edad=4;
mascota2.color='blanco';
mascota2.raza='caniche toy';
mascota2.setadopcion('en adopcion');


console.log('mascota1',mascota1);
console.log('mascota2',mascota2);


let confirmar = true;
let arrayPerros = [];
do {
    let mascotaNueva = new Mascota();
    mascotaNueva.tamaño=prompt('Ingrese el tamaño');
    mascotaNueva.edad=parseInt(prompt('Ingrese la edad'));
    mascotaNueva.color=prompt('Ingrese el color');
    mascotaNueva.raza=prompt('Ingrese la raza');
    mascotaNueva.setadopcion(prompt('Ingrese el estado de adopción'));
    
    arrayPerros.push(mascotaNueva);

    confirmar = confirm('Quiere agrega más perros?');

    console.log(arrayPerros);

} while (confirmar == false);


let perroAdopcion = [];
let perroProcesoAdopcion = [];
let perroAdoptado = [];

for(var i=0; i <= numeros.length; i++){
        var numero = adopcion[i];
        suma += numero;
        perroAdopcion.push(adopcion == 'en adopcion');
    console.log(suma);
}

// Genera estos 4 reportes en un console.log:
// Todos los perros
// Todos los perros en adopción
// Todos los perros en proceso de adopción
// todos los perros adoptados
// Recorrer con un for cada uno 
// Recomendacion: Crear un array para perros en adopcion, en proceso de adopcion y adoptados