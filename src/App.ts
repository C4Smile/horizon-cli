// @ts-check

import * as project from "../package.json" assert { type: "json" };

import * as texts from "./lang/texts.js";

// log
import log, { error, titleLog } from "./utils/log.js";

// terminal;
import { inputNumber } from "./utils/terminal.js";

// validation
import { isValidNumber } from "./utils/validation.js";

const lang = "es";

const mainMenu = () => {
  log(
    titleLog(`${texts.default[lang].main.title} ver:${project.default.version}`)
  );
  texts.default[lang].main.operations.forEach((item: string) => log(item));
  let userInput = inputNumber(texts.default[lang].input.options);
  while (!isValidNumber(userInput)) {
    log(error(texts.default[lang].errors.invalidInput));
    userInput = inputNumber(texts.default[lang].input.options);
  }
};

const Game = () => {
  mainMenu();
};

export default Game;
