/************************************************
8. HIGHER ORDER FUNCTIONS
************************************************/

const numbers = [1, 2, 3, 4, 5];



/************************************************
forEach()

Runs code for every element

Returns: undefined
************************************************/

console.log("\n===== FOREACH =====");

numbers.forEach((num) => {
    console.log(num);
});



/************************************************
map()

Creates NEW transformed array

Returns: New Array
************************************************/

console.log("\n===== MAP =====");

const doubled = numbers.map((num) => {
    return num * 2;
});

console.log(doubled);



/************************************************
filter()

Keeps elements matching condition

Returns: New Array
************************************************/

console.log("\n===== FILTER =====");

const greaterThanThree = numbers.filter((num) => {
    return num > 3;
});

console.log(greaterThanThree);



/************************************************
find()

Returns first matching element

Returns: Single Element
************************************************/

console.log("\n===== FIND =====");

const found = numbers.find((num) => {
    return num > 3;
});

console.log(found);



/************************************************
some()

Checks if ANY element satisfies condition

Returns: true/false
************************************************/

console.log("\n===== SOME =====");

const hasGreaterThanFour = numbers.some((num) => {
    return num > 4;
});

console.log(hasGreaterThanFour);



/************************************************
every()

Checks if ALL elements satisfy condition

Returns: true/false
************************************************/

console.log("\n===== EVERY =====");

const allPositive = numbers.every((num) => {
    return num > 0;
});

console.log(allPositive);



/************************************************
reduce()

Converts many values into one value

Returns: Single Value
************************************************/

console.log("\n===== REDUCE =====");

const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum);