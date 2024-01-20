// The file system (fs) module is a core Node.js module that provides a set of functions for
// interacting with the file system, allowing developers to perform various file-related operations such
// as reading, writing, updating, and deleting files. With fs, Node.js applications can manipulate files
// and directories, handle asynchronous file operations, and efficiently work with file streams, making
// it an essential module for building file-centric applications and managing data persistence in a
// server-side environment.

var http = require("http");
// initialize the http module
var fs = require("fs");
// initialize the fs module

http
  .createServer(function (req, res) {
    // createServer() method creates an HTTP server object
    fs.readFile("sample.html", function (err, data) {
      // readFile() method reads the contents of a file
      res.writeHead(200, { "Content-Type": "text/html" });
      // writeHead() method writes a response header to the request
      res.write(data);
      // write() method writes a response to the client
      console.log("server is running on port 3010");
      // console.log() method to inform the user that the server is running
      return res.end();
      // end() method ends the response process
    });
  })
  .listen(3010);
// listen() method makes the server object listen to the specified port
