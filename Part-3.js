let random = Math.floor(Math.random() * 100 + 1);
let guess = 0;

while (guess !== random) {
  guess = Number(prompt("Guess the number between 1 and 100:"));
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Invalid input. Try again between 1 - 100.");
    continue;
  }

  if (guess > random) {
    console.log("Too high, try again.");
  } else if (guess < random) {
    console.log("Too low, try again.");
  } else {
    console.log("Congrats 🎉 You guessed it right!");
  }
}
