// The http modue is a core Node.js module that provides functionality for creating servers and clients,
// and as such, it is used in almost all Node.js applications. The http module allows Node.js to transfer
// data over the Hyper Text Transfer Protocol (HTTP). The http module can create an HTTP server that listens
// to server ports and gives a response back to the client. The http module can also make HTTP requests to
// other servers.

var http = require("http");
// initialize the http module

http
  .createServer(function (req, res) {
    // createServer() method creates an HTTP server object
    res.writeHead(200, { "Content-Type": "text/html" });
    // writeHead() method writes a response header to the request
    res.write("Using the http module to create a server!!!");
    // write() method writes a response to the client
    console.log("Server for http.js is running on port 3009");
    // console.log() method to inform the user that the server is running
    res.end();
    // end() method ends the response process
  })
  .listen(3009);
// listen() method makes the server object listen to the specified port
