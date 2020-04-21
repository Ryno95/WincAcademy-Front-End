//Opracht 2a:
/* 1. Spread mayo
   2. Put cheese
   3. Enjoy
   */

/*let makeSandwich = function() {
    console.log('1. Spread Mayo');
    console.log('2. Add cheese');
    console.log('3. Enjoy!')

};

makeSandwich();*/

//Opdracht 2b:

let makeSandwich = function(topping) {
    console.log('There you go, a sandwich with' + ' ' + topping)
};

makeSandwich('ham');

//Opdracht 2c:

let calculateDiscountedPrice = function(_totalAmount, _discount) {
    console.log(Math.round(_totalAmount - _discount))
}
calculateDiscountedPrice(29, 2.35)

//Opdracht 2d:
let calculatePossibleDiscountedPrice = function(_totalAmount, _discount) {
    if (_totalAmount > 25) {
        console.log(Math.round(_totalAmount - _discount));
    } else console.log(Math.round(_totalAmount))
}
calculatePossibleDiscountedPrice(29, 2.90)