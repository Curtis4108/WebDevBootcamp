/* console.log("Hello from our first JS file")

let random = Math.random();
if (random < 0.5) {
    console.log("Your number is low");
    console.log(random);
}

 */

/* First guessing game */
/* let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess!");
let attempts = 1;

while (parseInt(guess) != targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess");
    } else {
        guess = prompt("Too low! Enter a new guess");
    }
}

if (guess === 'q') {
    console.log("Ok, quitting now");
} else {
    console.log(`You got it! It took ${attempts} guesses`);
} */
