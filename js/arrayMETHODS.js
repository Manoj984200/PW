// 1. Initializing the array
const arr1 = ["Nihit", "Bhavyam", "Manoj", "Ankit"];

// 2. push() - Adds item to the end
arr1.push("Rahul"); 
console.log(arr1); // Output: ["Nihit", "Bhavyam", "Manoj", "Ankit", "Rahul"]

// 3. pop() - Removes the last item
arr1.pop(); 
console.log(arr1); // Output: ["Nihit", "Bhavyam", "Manoj", "Ankit"]

// 4. shift() - Removes the first item
arr1.shift(); 
console.log(arr1); // Output: ["Bhavyam", "Manoj", "Ankit"]

// 5. unshift() - Adds an item to the start
arr1.unshift("Nihit"); 
console.log(arr1); // Output: ["Nihit", "Bhavyam", "Manoj", "Ankit"]

// 6. splice() - Adds/Removes items at a specific index (Index 1, delete 0, add "Zayan")
arr1.splice(1, 0, "Zayan"); 
console.log(arr1); // Output: ["Nihit", "Zayan", "Bhavyam", "Manoj", "Ankit"]

// 7. slice() - Extracts a portion (does not change original)
const subArr = arr1.slice(0, 2); 
console.log(subArr); // Output: ["Nihit", "Zayan"]

// 8. indexOf() - Finds the index of an item
const idx = arr1.indexOf("Manoj"); 
console.log(idx); // Output: 3

// 9. join() - Converts array to a string
const str = arr1.join(" | "); 
console.log(str); // Output: "Nihit | Zayan | Bhavyam | Manoj | Ankit"

// 10. reverse() - Flips the array order
arr1.reverse(); 
console.log(arr1); // Output: ["Ankit", "Manoj", "Bhavyam", "Zayan", "Nihit"]
// 11. concat() - joins array/elements at the end
arr2=arr1.concat('Charu','Mohit'); 
console.log(arr2)
//There is slicing in array also just like in python just step is not present in it only start stop