const addOne = function(numbers) {
    return numbers.map(number => number + 1)
}

// module.exports = addOne;


const getWordLengths = function(someWords) {

    return someWords.map(word => word.length)
};

// module.exports = getWordLengths;

const findNeedle = function(words) {
    return (words.indexOf('needle'));
  };
  
  module.exports = {addOne, getWordLengths, findNeedle}