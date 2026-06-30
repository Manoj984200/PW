// try catch is used to print error by this we can stop terminating the program which can happen due to error instead of terminating the program the error can be printed by this
// It is also called exception/ error handling
function ab() {
    try {
        console.log(A);
        a=97
        
        
        
    } catch (error) {
        console.dir(error);
        console.dir(error.message);  //it shows output - A is not defined
        console.log(error.name); //it shows output - ReferenceError
        console.log(error.stack); //it shows output
        console.dir(error); //it shows output      
    }
    finally {
        console.log("Finally always runs");
    }
//     Key Differences
// - Outside statements: run only if the program reaches them. If you return early, throw another error, or exit the function, they may never run.
// - Finally block: guaranteed to run before leaving the try...catch, no matter what happens (error, no error, even if you return inside try/catch).


}
ab()
console.log('even error in program rest statements outside try catch works normal');
throw new Error("This is custom error"); //It is used to generate your own error

// Key points
// - In your code, the error is a ReferenceError because A is not defined.
// - The error object has several properties, including:
// - name → "ReferenceError"
// - message → "A is not defined"
// - stack → the stack trace
// When you use console.dir
// - console.dir(error) → expands the object so you can inspect its properties (name, message, stack).
// - console.dir(error.message) → since .message is just a string, it behaves like console.log and prints:

