// date-fns is a popular NPM package library for manipulating dates and times in JavaScript. It provides
// a set of functions for performing various operations on dates, making it easier for developers to work
// with dates in a consistent and reliable manner. In addition to its comprehensive feature set, one
// notable strength of date-fns lies in its efficient and modular design. Unlike some date libraries that
// may contribute to larger bundle sizes by importing unnecessary functionalities, date-fns adopts a
// modular approach. Developers have the flexibility to selectively import only the specific functions
// they need, allowing for a more optimized and lightweight codebase.

// import the date-fns module and the required functions for use
const { format, addDays, addYears, subDays } = require("date-fns");

// initialize the date
const date = new Date();
// format the date using the format() function and log the result
console.log(`Today is: ${format(date, "MM/dd/yyyy")}`);

// add 1 day to the date using the addDays() function
const tomorrow = addDays(date, 1);
// format the date using the format() function and log the result
console.log(`Tomorrow is: ${format(tomorrow, "MM/dd/yyyy")}`);

// subtract 1 day from the date using the subDays() function
const yesterday = subDays(date, 1);
// format the date using the format() function and log the result
console.log(`Yesterday was: ${format(yesterday, "MM/dd/yyyy")}`);

// add 1 year to the date using the addYears() function
const nextYear = addYears(date, 1);
// format the date using the format() function and log the result
console.log(`Next year is: ${format(nextYear, "MM/dd/yyyy")}`);
