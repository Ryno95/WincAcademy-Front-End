let name = window.prompt('What is your name?');

const Guess = window.prompt('Hey ' + name + ', I hope you are doing well today! Guess a number between 0 nad 25 to play!');
console.log('You chose ' + Guess);

let randomNumber = (Math.round(Math.random() * 25))
console.log(randomNumber);

if (Guess == randomNumber) {
    console.log("You win!(Nothing but an ego boost)");
} else {
    console.log("Too Bad! Refresh the Page to try again! If it you don't want to play again, it was a pleasure having you " + name + "!")
}