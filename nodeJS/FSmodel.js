// FS is used to store files (images,pdf etc) which mongodb can't mongodb only stores text so it stores url of files thatis stored using FS thats how they are used practically
// This program introducing one of the most important Node.js modules: that is FS(file system) with basic operation
// Below is examples of Async.. operations
//  First operation 
import fs from "fs"; // importing fs allows node to 
// Create files
// Read files
// Update files
// Delete files


// Reading a file
fs.readFile("txtFile.txt", "utf8", (error, data) => {
    if (error) throw error;
    console.log(data);
});

// writing in file
// import fs from "fs";

fs.writeFile("txtFile.txt", "Hello Manoj Sharma", (error) => {

    if (error) throw error;

    console.log("File Written Successfully!");
});


//Apped. it append text in same file while abuve code will replace the existing text from given text

// import fs from "fs";

fs.appendFile(
    "txtFile.txt",
    "\nPlease complete this FSD",
    (error) => {

        if (error) throw error;

        console.log("Data Added Successfully!");
    }
);

// Creating a Folder/directory
// import fs from "fs";

fs.mkdir("SampleDir", (error) => {

    if (error) throw error;

    console.log("Directory Created Successfully!");
});

// Deleting a Folder/directory

// import fs from "fs";

fs.rmdir("SampleDir", (error) => {

    if (error) throw error;

    console.log("Directory Deleted Successfully!");
});

// Creating file

// import fs from "fs";

fs.writeFile("student.txt", "Manoj Sharma", (error) => {

    if (error) throw error;

    console.log("File Created!");
});


// Deleting file

// import fs from "fs";

fs.unlink("student.txt", (error) => {

    if (error) throw error;

    console.log("File Deleted!");
});



// Below is examples of Sync.. operations


