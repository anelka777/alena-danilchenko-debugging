const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');
const outOfRangeMessage = document.getElementById('out-of-range');

let targetNumber;
let attempts = 0;
let maxNumberOfAttempts = 5; /* error 4*/

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  
  if (guess < 1 || guess > 99 || isNaN(guess)) {
    hideAllMessages();
    outOfRangeMessage.style.display = '';
    guessInput.value = '';
    return;
  }

  attempts = attempts + 1;
  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  } else {
    if (guess < targetNumber) {
      tooLowMessage.style.display = '';
    } else {
      tooLowMessage.style.display = '';
    }

    const remainingAttempts = maxNumberOfAttempts - attempts;
    const guessWord = remainingAttempts === 1 ? 'guess' : 'guesses';

    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} ${guessWord} remaining`;
  }


  if (attempts === maxNumberOfAttempts) { /*1 error*/
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  guessInput.value = '';

  resetButton.style.display = '';
}

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) { /* error 5*/
    messages[elementIndex].style.display = 'none';
  }
}

function setup() { /* error 2*/
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  attempts = 0; /* error 7*/
  maxNumberOfAttempts = 5; /* error 8*/

  
  // Enable the input and submit button
  submitButton.disabled = false; /* error 3*/
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
