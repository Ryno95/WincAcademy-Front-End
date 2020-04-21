//Opdracht is helemaal onderaan
// //two parameters, everything after the arrow is returned automatically
// const sum = function(a, b) {
//         return a + b
//     }
//     //console.log(sum(3, 8));

// const sum2 = (a, b) => a + b
//     //console.log(sum2(3, 8));
//     /////////////////////////////////////////////////////

// //one parameter, if there's only one parameter the '()' can be left out 
// const isPositive = function(number) {
//         return number >= 0
//     }
//     //console.log(isPositive(5))

// const isPositive2 = number => number >= 0
//     //console.log(isPositive2(5));
//     ///////////////////////////////////////////////////////////

// const randomNumber = function() {
//         return Math.random
//     }
//     //console.log(randomNumber)

// const randomNumber2 = () => { Math.random }
//     //console.log(randomNumber2)

// ////////////////////////////////////
// document.addEventListener('click', function() {
//     console.log('click')
// })


// document.addEventListener2('click', () => console.log('click'))

//A en B die code om in een arrow function:
const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");
ikRockArrowFunctions();

//C Schrijf een zo kort mogelijke anonymous arrow function die 1+2
() => 1 + 2 //Had ik zelf niet uitgepuzzled

//D schrijf een arrow func die a+b, noemt het myFunction
const myFunction = (a, b) => (a + b);
console.log(myFunction(1, 2));

//E schrijf een =>func met een parameter, dus geen haakjes
const addFive = a => (a + 5);
console.log(addFive(8));

//F Er is 1 uitzondering, namelijk het returnen van een object {}.
//Wanneer je een object returned moet het object in een () gezet worden, om niet verward te worden met de curly braces {} van een function.
const createObject = () => ({ value: "Something" })
console.log(createObject);