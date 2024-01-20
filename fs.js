// The file system (fs) module is a core Node.js module that provides a set of functions for
// interacting with the file system, allowing developers to perform various file-related operations such
// as reading, writing, updating, and deleting files. With fs, Node.js applications can manipulate files
// and directories, handle asynchronous file operations, and efficiently work with file streams, making
// it an essential module for building file-centric applications and managing data persistence in a
// server-side environment.

// initialize the fs module
var fs = require("fs");
// Specify the content to be written to the file
var contentToWrite = "Hello, this is the content to be written to the file.";
// Specify the file path and name
var filePath = "output.txt";

// Open the file and create it if it doesn't exist
fs.open(filePath, "wx", function (err, fd) {
  // Write the content to the file
  fs.writeFile(fd, contentToWrite, function (err) {
    // Close the file descriptor
    fs.close(fd, function () {
      console.log(`Data has been written to ${filePath}`);
    });
  });
});
