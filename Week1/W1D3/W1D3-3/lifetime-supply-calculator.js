const maxAge = 99
let calculateSupply = function(age, amountPerDay) {
    console.log('You will need ' + Math.round((maxAge - age) * amountPerDay * 365) + ' to last you until the ripe old age of ' + maxAge)
};

calculateSupply(69, 5.43);
calculateSupply(55, 19);
calculateSupply(42, 3.14);