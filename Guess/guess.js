function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guessRight = false;
  
    while (!guessRight) {
      const userGuess = parseInt(prompt("Enter a number between 1 and 100:"));
  
      if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        console.log("Retry again. Enter a valid number between 1 and 100.");
      } else if (userGuess === randomNumber) {
        console.log("Congratulations! You guessed correctly!");
        guessRight = true;
      } else if (userGuess < randomNumber) {
        console.log("Too low. Try again!");
      } else {
        console.log("Too high. Try again!");
      }
    }
  }
  
  guessNumber();
  