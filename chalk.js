var chalk = require("chalk");
// initialize the chalk package

const log = console.log;
// initialize the log variable

log(chalk.yellowBright("Hello") + chalk.green(" World") + chalk.red("!"));
// log() method to print the 'colored' message to the console
