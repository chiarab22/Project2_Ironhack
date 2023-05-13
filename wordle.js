//Creamos un array de palabras para que el juego elija una al azar
const words = ["perro", "gato", "casa", "auto", "manzana", "libro", "arbol", "jardin","ironhack", "computadora", "naranja", "ciudad", "estudio", "familia", "amigo", "trabajo", "universidad"];

const word = words[Math.floor(Math.random() * words.length)];

// Creamos un array de la misma longitud que la palabra elegida, pero con guiones bajos
const wordArray = Array(word.length).fill("_");

//Añadimos función de customización de intentos
let attemptsLeft = parseInt(prompt("Ingresa el número de intentos que deseas tener:"));

//Recogemos los elementos del DOM
const wordElement = document.getElementById("word");
const guessElement = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const outputElement = document.getElementById("output");

wordElement.textContent = wordArray.join(" ");

submitButton.addEventListener("click", function (event) {
  event.preventDefault(); 

  const guess = guessElement.value.toLowerCase(); 

  
  if (guess.length !== word.length) {
    outputElement.textContent = "La palabra debe tener " + word.length + " letras.";

    if (attemptsLeft === 1) {
      setTimeout(() => {
        alert("No tienes más intentos. La palabra secreta era: " + word);
      }, 1000);
    }
  } else {

    let correctLetters = 0;
    for (let i = 0; i < word.length; i++) {
      if (guess[i] === word[i]) {
        wordArray[i] = guess[i];
        correctLetters++;
      }
    }

    wordElement.textContent = wordArray.join(" ");

    if (correctLetters === word.length) {
      outputElement.textContent = "Ha ganado! La palabra era: " + word + ".";
    } else {
      outputElement.textContent = "Casi aciertas. Tienes " + (attemptsLeft - 1) + " intentos más.";
      
      if (attemptsLeft === 1) {
        setTimeout(() => {
          alert("No tienes más intentos. La palabra secreta era: " + word);
        }, 1000);
      }
      
      attemptsLeft--;
    }
  }
  
  guessElement.value = "";
});
