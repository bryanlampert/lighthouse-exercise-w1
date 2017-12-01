var chalk = require("chalk");

var message = "Hello " + chalk.bgRed.yellow("World");
var msg2 = "Hello" + chalk.bgBlue.black("World");

console.log(message, msg2);
