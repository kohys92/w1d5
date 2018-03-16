var chalk = require("chalk");

var message = chalk.bgCyan.bold.inverse("Hello") + chalk.yellow("World");
console.log(message);