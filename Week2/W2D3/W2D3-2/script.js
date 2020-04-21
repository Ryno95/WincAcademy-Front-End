//A use .find method to well find an item bases on a value
// const superheroes = [
//     { name: "Batman", alter_ego: "Bruce Wayne" },
//     { name: "Superman", alter_ego: "Clark Kent" },
//     { name: "Spiderman", alter_ego: "Peter Parker" }
// ]
// const findSpiderMan = function(arr) {
//     return arr.find(item => item.name == "Spiderman")
// }

// console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


// B in an array with integers, return the integers doubled
// const doubleArrayValues = function(arr) {
// const doubledValuesArray = [];
//     // for (let i = 0; i < arr.length; i++) { //eerst met 'for' gemaakt voor de structuur 
//     //     doubledValuesArray.push(arr[i] * 2);
//     // }
//     arr.forEach(number => {
//         doubledValuesArray.push(number * 2);
//     });
//     return doubledValuesArray;
// };

// console.log(doubleArrayValues([2, 4, 8]));
// result should be [2, 4, 6]

//C in an integer Array, write a fucntion to see if there is a #>10
// const containsNumberBiggerThan10 = function(arr) {
//     return arr.some(number => {
//         return number > 10;
//     })
// };


// console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true

//D in a string Array write a function to ceck if a specific string is present
// const isItalyInTheGreat7 = function(arr) {
//     return arr.some(index => {
//         return index == 'Italy';
//     })
// };


// console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));
// result should be true

//E in an integer Array write a function that multiplies every integer by 10
// const tenfold = function(arr) {
//     const newArr = [];
//     arr.forEach(number => {
//         newArr.push(number * 10);
//     });
//     return newArr;
// }


// console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

//F in an integer array check if all numbers have a value that's less than 100
// const isBelow100 = function(arr) {
//     return arr.every(number => {
//         return number < 100
//     })
// }




// console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false

//G in an inter array write a function where all the numbers are plussed together and returns the sum total
const bigSum = function(arr) {
    const result = arr.reduce((sum, current) => sum + current);
    return result;

}


console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
    // result should be 1118