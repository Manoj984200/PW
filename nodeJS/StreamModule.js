// this program is created to fetch data in chunks from a text file of 20 mb which i already created with namelargeTextFile.txt it's getting data in chunks so that server don't get overloaded with so much data at once. just like video streaming data comes in chunks to avoid server overload. so here we are using stream module of nodejs to read data in chunks and write it to another file named copyFile.txt which is created in same folder. so here we are using readStream and writeStream to read and write data in chunks. so here we are using on method to listen to data event which is emitted when a chunk of data is available to read and end event which is emitted when there is no more data to read. so here we are using write method to write the chunk of data to destination file. so here we are using end method to close the write stream after all the data is written to destination file.
const fs = require("fs");
const path = require("path");

// Source file
const read_path = path.join(__dirname, "largeTextFile.txt");// __dirname gets the current directory path along with file name largeTextFile.txt which i already created
// Destination file
const write_path = path.join(__dirname, "copyFile.txt"); // this file will be generated automatically but here its only path is created in further cude the file will be created automatically in this file the data will be comimg in chunks and stored from source file largeTextFile.txt

const readStream = fs.createReadStream(read_path); // here stream created to read the data from source file but it doesn't fetch the data. Actually data is fetched by inner code of node there is no line of code in the program that fetch data it happens internally in node

const writeStream = fs.createWriteStream(write_path); // this line create the write stream path. it also create file copyFile.txt automatically in case this file is already there the whole data inside this file will be overwrited with the text that will come in chunks from source file

// Read chunk by chunk
readStream.on("data", (chunk) => { // there are many events in like data, end,error, close, finesh etc. here data event trigger as chunk receives and after that callback works 

    console.log("Chunk received:", chunk.length); // chunk.length print total size of data in bytes

    // Write that chunk to destination file
    writeStream.write(chunk);

});

// Reading completed
readStream.on("end", () => { // end event trigger when all the data is read from source file and no more data is there to read

    console.log("Copy Completed!");

    writeStream.end();

});

// Below is method 2 of doing the same of above program but using .pipe instead of .write where no need to create callback as it dont write chunk by chunk
const fs = require("fs");
const path = require("path");

// Source File
const read_path = path.join(__dirname, "largeTextFile.txt");

// Destination File
const write_path = path.join(__dirname, "copyFile_pipe.txt");

// Create Streams
const readStream = fs.createReadStream(read_path);

const writeStream = fs.createWriteStream(write_path);

// Automatic Transfer
readStream.pipe(writeStream);

// Finished Writing
writeStream.on("finish", () => {

    console.log("File Copied Successfully!");

});

// Error Handling
readStream.on("error", (err) => {
    console.log(err);
});
