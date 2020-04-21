const sumFunction = function(...numbers) {
    return numbers.reduce((prev, current) => prev + current)
}

//console.log(sumFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


const addAll = function(a, b, c, d, e, f, g) {
    return a + b + c + d + e + f + g
}

const arrNum = [1, 2, 3, 4, 5, 6, 7]

//console.log(addAll(...arrNum));