function getData(dataId, getNextData) {
    //2s
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2); // Question why getData is running with one parameter while above it's declared with two below is complete answer
});
// Answer
// If you were programming in languages like C++, Java, or Python, doing this would instantly crash your program with an error.

// But JavaScript handles missing parameters differently. Here is the secret: JavaScript is incredibly forgiving with arguments. If a function asks for two parameters, but you only give it one, JavaScript does not panic. It simply assigns the missing parameter a special value called undefined.

// Here is exactly what happens behind the scenes when you call getData(2);:

// 1. How the variables are filled
// When the computer looks at getData(2), it maps the arguments to the definition function getData(dataId, getNextData) like this:

// dataId becomes 2

// getNextData becomes undefined

// 2. The Safety Net (The if statement)
// If the program just blindly tried to run getNextData() when it was undefined, the app would crash. But look closely at the original function definition. The creator added a safety net:

// JavaScript
// if (getNextData) {
//     getNextData(); 
// }
// In JavaScript, undefined is considered a "falsy" value.
// So, when getData(2) is running, the computer checks: "Is getNextData a real thing?" Because it is undefined, the answer is No. The computer completely skips the if block. It prints "data 2" to the console, realizes there is nothing left to do, and safely finishes.

// The Summary
// Passing only one argument is the programmer's way of saying: "This is the end of the line." * getData(1, ...) says: "Get data 1, and when you finish, do the next thing I gave you."

// getData(2) says: "Get data 2, and since I didn't give you a next step, you can just stop."