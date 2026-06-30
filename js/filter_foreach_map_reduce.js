const myNumbers = [1,2,3,4,5,6,7,8,9,10];

let newNums = [];

myNumbers.forEach((num) => {
    newNums.push(num + 10);
});
//  below is the same program using map


// console.log(newNums);
// const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map((num) => num + 10); // map always return value it is more easier then foreach
// console.log(newNums);

// below is the code to show usecase of filter this program add even numbers

const myNumber = [1,2,3,4,5,6,7,8,9,10];

// Step 1: Filter even numbers
const evenNumbers = myNumber.filter((num) => num % 2 === 0);

// Step 2: Calculate total
let total = 0;
evenNumbers.forEach((num) => {
    total += num;
});

console.log(evenNumbers); // [2,4,6,8,10]
console.log(total);       // 30