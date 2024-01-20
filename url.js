// The url module is a core Node.js module that provides utilities for for parsing and formatting URLs.
// It allows developers to break down a URL into its individual components such as protocol, hostname,
// pathname, and query parameters, and also facilitates the creation of properly formatted URLs. The module
// is particularly useful for handling and manipulating URLs in web applications, making it easier to
// extract and manipulate data from URL strings.

var url = require("url");
// initialize the url module
var adr = "http://localhost:3009/default.htm?year=2024&month=January&day=19";
// create a variable with a url string
var q = url.parse(adr, true);
// parse() method takes a URL string, parses it, and returns a URL object

console.log(`Host: ${q.hostname}`);
//returns host name
console.log(`Pathname: ${q.pathname}`);
//returns path name
console.log(`Date: ${q.query.month} ${q.query.day}, ${q.query.year}`);
//returns date
