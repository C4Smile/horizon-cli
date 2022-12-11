import chalk from "chalk";

const log = console.log;

export const error = chalk.bold.red;
export const info = chalk.blue;
export const good = chalk.green;
export const warning = chalk.hex("#FFA500");

// * title styles
export const titleLog = chalk.yellow.bold.italic;

export default log;
