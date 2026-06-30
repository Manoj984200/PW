// 1. pending , 2. fullfilled , 3. rejected

function promiseFunction(resolve, reject) {
    let surajPercentage = 91;
    if (surajPercentage >= 90) {
        resolve("I will fullfil your dream with bike");
    } else {
        reject("Unfortuantely, try after sometime!!");
    }
}

function handleFullfilled(resolve) {
    console.log(resolve);
}
function handlerejected(rejected) {
    console.log(rejected);    
}
function handlefinally() {
    console.log('finally will always run');
    
}
let promise = new Promise(promiseFunction);
promise.then(handleFullfilled).catch(handlerejected).finally(handlefinally);
// below is the latest version of code that developers write now a days
// Step 1 & 3 combined: We create the Promise and write the logic right inside it
// new Promise((resolve, reject) => {
//     let surajPercentage = 91;
    
//     if (surajPercentage >= 90) {
//         resolve("I will fullfil your dream with bike");
//     } else {
//         reject("Unfortunately, try after sometime!!");
//     }

// })
// // Step 2 combined: We attach the .then() directly to the end!
// .then((message) => {
//     console.log(message);
// });