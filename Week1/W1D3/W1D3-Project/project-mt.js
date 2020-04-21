console.log('Hallo')
let numberToBeGuessed = null;
let name = window.prompt('What is your name?');
console.log("Welcome to Guess the Number " + name + "!!");
let guess;
const min = 0;
const max = 25;

//while (name === undefined || name === null || name.length === 0) {}


// kies hier een random getal
numberToBeGuessed = Math.round(Math.random() * 25);
console.log("Pssst het nummer is: " + numberToBeGuessed);

//onder welke voorwaarde moeten we blijven loopen ?
i = 0
while (guess !== numberToBeGuessed || i > 5) {
    guess = parseInt(window.prompt('Guess a number between 0 and 25 to play!'))
    i++
    console.log("Je gok is:" + guess);
    if (guess > numberToBeGuessed) {
        console.log("Je gok was te hoog");
    } else if (guess < numberToBeGuessed) {
        console.log("Je gok was te laag");
    } else {
        console.log("Goed geraden, het nummer was inderdaad " + guess);
    }
}

console.log(
    "We sluiten de game af. Bedankt voor het spelen, tot de volgende keer!"
);