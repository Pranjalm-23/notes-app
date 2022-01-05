const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
//import chalk from "chalk";

console.log(chalk.red.inverse.bold("Hello world!"));
console.log(process.argv); // for the arguments like  "node app.js ramram"

console.log(yargs.argv); // for the arguments like  "node app.js ramram"
