import chalk from "chalk";

const log = console.log;

export const error = chalk.bold.red;
export const info = chalk.blue;
export const warning = chalk.hex("#FFA500");

export default log;
