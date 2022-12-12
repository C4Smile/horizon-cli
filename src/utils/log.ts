import chalk from "chalk";

const log = console.log;

export const error = chalk.bold.red;
export const info = chalk.blue;
export const good = chalk.green;
export const warning = chalk.hex("#FFA500");

export const materials = chalk.hex("#eed09d");
export const metals = chalk.hex("#aaa9ad");
export const supplies = chalk.hex("#ff4500");
export const coins = chalk.hex("#D4AF37");

// * title styles
export const titleLog = chalk.yellow.bold.italic;

export default log;
