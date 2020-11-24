const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)


// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
//
// Bonus: Use docs to mess around with other styles. Make text bold and inversed

const chalk = require('chalk');
const log = console.log;

log(chalk.green("Success!"))
log(chalk.greenBright("Big Success!"))
log(chalk.bold.greenBright("Bigger Success!"))
log(chalk.red("Failure!"))
log(chalk.redBright("Big Failure!"))
log(chalk.underline.redBright("Bigger Failure!"))

log(chalk.inverse("Inversed!"))
log(chalk.yellow.inverse("Yellow inversed!"))
log(chalk.yellow.bgBlue("Yellow with blue background!"))
log(chalk.yellow.bgBlue.inverse("Yellow with blue background inversed!"))