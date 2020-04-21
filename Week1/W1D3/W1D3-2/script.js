// Functions can have multiple parameters
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
// ex of a function performing a task
greet('Ryno', 'Meiboom'); //In de haakjes (Parameter)
greet('Anna', 'Johnson')



//ex of a fucntion calculating a value
function square(number) {
    return number * number
}
console.log(square(2));

//Opdracht 2a

// Function Declaration
function hello() {
    console.log(hello)
}
hello();

//Fucntion Expression
let hello = function() {
    console.log('hello')
}

hello();

/*Het meest belangrijke verschil in het kort:
- When using function declarations, the function definition is hoisted, 
thus allowing the function to be used before it is defined.
- Function expressions** are not hoisted, and therefore cannot be used before they are defined.*/