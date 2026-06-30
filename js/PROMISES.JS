const promiseone = new Promise(function (resolve,reject) {
    // Do an anync task
    setTimeout(function () {
        console.log('Anync task is completed');
        
        resolve()
    },1000)
});
promiseone.then(function () {
    console.log('Promise consumed');
    
})

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

let promise = new Promise(promiseFunction);
promise.then(handleFullfilled);