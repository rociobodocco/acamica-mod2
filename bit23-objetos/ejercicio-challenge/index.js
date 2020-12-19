class test {
    correctResult = 0;
    wrongResult = 0;

    correctAnswer(){
		this.correctResult += this.correct + 0; // += acumular valores 
    }
  
    wrongAnswer(){
        this.wrongResult += this.wrong;
    }
    
    finalScore(){
        return this.name + ' tu resultado final es ' + (this.correctResult - this.wrongResult);
    }
}

let testStudent1 = new test();
//Creo las propiedades
testStudent1.name = 'Luis'; 
testStudent1.correct = 1;
testStudent1.wrong = 1;

//Respuestas correctas
testStudent1.correctAnswer();
testStudent1.correctAnswer();
testStudent1.correctAnswer();

//Respuestas incorrectas
testStudent1.wrongAnswer();
testStudent1.wrongAnswer();
testStudent1.wrongAnswer();
testStudent1.wrongAnswer();
testStudent1.wrongAnswer();
testStudent1.wrongAnswer();
testStudent1.wrongAnswer();
//Resultado final del test
console.log(testStudent1.finalScore());

// testStudent2 = new test();
// //Creo las propiedades
// testStudent2.name = Pedro;
// testStudent2.correct = 1;
// testStudent2.wrong = 1;

// //Respuestas correctas
// testStudent2.correctAnswer();
// testStudent2.correctAnswer();
// testStudent2.correctAnswer();
// testStudent2.correctAnswer();
// testStudent2.correctAnswer();
// testStudent2.correctAnswer();
// testStudent2.correctAnswer();

// //Respuestas incorrectas
// testStudent2.wrongAnswer();
// testStudent2.wrongAnswer();
// testStudent2.wrongAnswer();
// //Resultado final del test
// console.log(testStudent2.finalScore());



