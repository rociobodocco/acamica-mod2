var num1 = 8;
var num2 = 20;

let elMayor = cualEsMayor (8,20);

function cualEsMayor(num1,num2) {
    return num2 > num1;
}
    

console.log('El número ' + elMayor + ' es mayor que el número ' + num1);
// resultado booleano co let elMayor 
// resultado real con var '20'



let numeroMenor = cualEsMenor(5,7,2);

function cualEsMenor() {
    return 2 < 5 < 7;    
}

console.log(numeroMenor);



