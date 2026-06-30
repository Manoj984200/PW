//There are two variables available in Node.js
// 1. __dirname

// Gives the current folder path.

console.log(__dirname); //__dirname → current folder's absolute path

// Output:

// C:\Users\DELL\Desktop\H\nodeJS

// Useful when reading/writing files:
const fs = require("fs"); // instead require it could be imported(ES model from packeg.json ) but for that we must have package.json created in same folder after that instead of require it would be like 'import path from 'path';
const path = require("path");

fs.readFile(__dirname + "/txtFile.txt", "utf8", (err, data) => { // it's used to get the text from file named as txtFile.txt using url+filename(absolute path)
    console.log(data);
});

// 2. __filename

// Gives the current file path including filename. __dirname → current folder's absolute path

console.log(__filename); //__filename → current file's absolute path

// Output:

// C:\Users\DELL\Desktop\H\nodeJS\FSmodel.js


//  importing path model


console.log(path.isAbsolute(__filename)); //it give result in true or  false if path is absolute



// path.join - it's used to add a file in the given location 
// const path = require("path");

const result = path.join(__dirname, "nodeJS", "profile.jpg");

console.log(result);
// BELOW IS REAL LIFE USE OF .JOIN AS it'll not add any file so read below explanation
/* Real MERN Example 3: Reading files

Instead of:

fs.readFile("txtFile.txt", ...)

which may fail if you run the program from another folder, use:

fs.readFile(
  path.join(__dirname, "txtFile.txt"),
  "utf8",
  callback
);

Now it always finds the correct file.

Why not just use string concatenation?

You could do:

__dirname + "/uploads/profile.jpg"

But different operating systems use different separators:

Windows:

uploads\profile.jpg

Linux/Mac:

uploads/profile.jpg

path.join() automatically handles this.

path.join(__dirname, "uploads", "profile.jpg");

works everywhere.
Also it is used to create dummy paths (url) that is further used to insert that file usinf FS module as FS takes / stores files and mongoDB only holds url of that    */


// path.resolve -> it's same like join but join give relative url and resolve gives absolute below is complete explanation of it
/* What is common?

Both:

path.join(...)
path.resolve(...)

✅ Return a path string

❌ Do NOT create files

❌ Do NOT create folders

❌ Do NOT read files

❌ Do NOT write files

They only calculate paths.

path.join()
const path = require("path");

console.log(
  path.join("uploads", "profile.jpg")
);

Output:

uploads\profile.jpg

This is typically a relative path because you didn't start from an absolute location.

path.resolve()
const path = require("path");

console.log(
  path.resolve("uploads", "profile.jpg")
);

Output:

C:\Users\DELL\Desktop\H\nodeJS\uploads\profile.jpg

This is an absolute path.

But here's the important point

Many beginners think:

join = relative path

resolve = absolute path

That's usually true, but not always.

Example
path.join(__dirname, "uploads", "profile.jpg")

Output:

C:\Users\DELL\Desktop\H\nodeJS\uploads\profile.jpg

This is also an absolute path because __dirname is already absolute.

So:

Function	Main Job
join()	Combine path pieces
resolve()	Build an absolute path by resolving from current location
Easy memory trick

Imagine:

Current folder:
C:\Users\DELL\Desktop\H\nodeJS
join()
path.join("uploads", "profile.jpg")

Simply says:

uploads\profile.jpg

"Just combine these names."

resolve()
path.resolve("uploads", "profile.jpg")

Says:

Start from current folder and tell me the exact full address.

Result:

C:\Users\DELL\Desktop\H\nodeJS\uploads\profile.jpg */
