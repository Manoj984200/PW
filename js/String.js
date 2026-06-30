// 1. Initializing our primary string
const text = "Hello, Nihit and Bhavyam!";

// 2. concat() - Joins two or more strings together
const joinedText = text.concat(" Welcome to JavaScript.");
console.log(joinedText); 
// Output: "Hello, Nihit and Bhavyam! Welcome to JavaScript."

// 3. includes() - Checks if a string contains a specific sequence
console.log(text.includes("Nihit")); 
// Output: true

// 4. indexOf() - Returns the starting index of the first match (-1 if not found)
console.log(text.indexOf("Bhavyam")); 
// Output: 17

// 5. startsWith() - Checks if the string begins with the specified characters
console.log(text.startsWith("Hello")); 
// Output: true

// 6. endsWith() - Checks if the string ends with the specified characters
console.log(text.endsWith("!")); 
// Output: true

// 7. slice() - Extracts a section based on start and end index
console.log(text.slice(7, 12)); 
// Output: "Nihit"

// 8. substring() - Similar to slice, but doesn't accept negative indices
console.log(text.substring(7, 12)); 
// Output: "Nihit"

// 9. charAt() - Returns the character at a specific index
console.log(text.charAt(0)); 
// Output: "H"

// 10. at() - Like charAt, but allows negative numbers to count from the end
console.log(text.at(-2)); 
// Output: "m"

// 11. toUpperCase() - Converts the entire string to uppercase
console.log(text.toUpperCase()); 
// Output: "HELLO, NIHIT AND BHAVYAM!"

// 12. toLowerCase() - Converts the entire string to lowercase
console.log(text.toLowerCase()); 
// Output: "hello, nihit and bhavyam!"

// 13. trim() - Removes whitespace from both ends (using a new string for this example)
const messyString = "   Manoj and Ankit   ";
console.log(messyString.trim()); 
// Output: "Manoj and Ankit"

// 14. replace() - Replaces the *first* match with a new string
console.log(text.replace("Bhavyam", "Manoj")); 
// Output: "Hello, Nihit and Manoj!"

// 15. replaceAll() - Replaces *all* matches with a new string
const repeatText = "apple, apple, orange";
console.log(repeatText.replaceAll("apple", "banana")); 
// Output: "banana, banana, orange"

// 16. split() - Converts a string into an Array, splitting it by a separator
const namesList = "Nihit,Bhavyam,Manoj";
console.log(namesList.split(",")); 
// Output: ["Nihit", "Bhavyam", "Manoj"]

// 17. repeat() - Repeats the string a specified number of times
const word = "Code! ";
console.log(word.repeat(3)); 
// Output: "Code! Code! Code! "

// 18. padStart() - Pads the beginning of a string to reach a certain length
const invoiceNum = "45";
console.log(invoiceNum.padStart(5, "0")); 
// Output: "00045"

// 19. padEnd() - Pads the end of a string to reach a certain length
const price = "99.";
console.log(price.padEnd(5, "9")); 
// Output: "99.99"