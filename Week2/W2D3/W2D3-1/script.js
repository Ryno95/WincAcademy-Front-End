//A to check if the input is an array:

const isArray = function(inputToCheck) {
    return Array.isArray(inputToCheck)
}

console.log(isArray("Is this an array? I dont think so"));
console.log(isArray([1, 2, 3, 4]));
console.log(isArray(['Is this an Array, yes i think so yes! Look at my sexy square brackets']))

//B check the amount of elements in an array

// const amountOfElements = function(Arraytocount) {
//     return Arraytocount.length;
// };
// console.log(amountOfElements(['one', 'two', 'three', 4, 5, 3 + 3]));

//C return first element in Array

// const returnElementNr = function(arrayNr) {
//     return arrayNr[0]
// };
// console.log(returnElementNr(["A", "B", "C", "D"]));

//D return last element in an Array

// const returnLastElement = function(arrayNr) {
//     return arrayNr[arrayNr.length - 1];
// };
// console.log(returnLastElement([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(returnLastElement(["A", "B", "C", "D", "E", "F"]));

//E Remove first element and display the rest
// const badHabits = ['Smoking', 'Drinking', 'Sleeping', 'Rec', 'Nogiets']

// const stopSmokingSlice = function(array) {
//     const stoppedSmoking = array.slice(1, 5);
//     // console.log("Nieuwe array:", stoppedSmoking, "de originele array", array);
//     return stoppedSmoking
// }
// console.log(stopSmokingSlice(badHabits));

// const stopSmokingSplice = function(array) {
//     const removedSmoking = array.splice(0, 1);
//     return array;
// };

// console.log(stopSmokingSplice(badHabits));

//F join array into a string
// const stringFromArray = function(array) {
//     return array.join("");
// }
// console.log(stringFromArray(["Step ", "by ", "step!"]));

//G
// const combineArray = function(array1, array2) {
//     return array1.concat(array2);
// };

// console.log(combineArray(['a', 'b', 'c'], [1, 2, 3]))