// @ts-check

import * as project from "../package.json" assert { type: "json" };

import * as texts from "./lang/texts.js";

// services
import { login } from "./services/auth.js";

// log
import log, { error, info, titleLog } from "./utils/log.js";

// terminal;
import { inputNumber } from "./utils/terminal.js";

// validation
import { isValidNumber } from "./utils/validation.js";

const lang = "es";

const showAbout = () => {
  log(info(texts.default[lang].main.about.title));
  log(texts.default[lang].main.about.body);
  log(`${texts.default[lang].main.about.author} ${project.default.author}`);
  log(`${texts.default[lang].main.about.version} ${project.default.version}`);
  let a = inputNumber(texts.default[lang].input.continue);
  return -1;
};

const mainMenu = async () => {
  try {
    let userInput: number;
    while (userInput !== 3) {
      console.clear();
      log(
        titleLog(
          `${texts.default[lang].main.title} ver:${project.default.version}`
        )
      );
      texts.default[lang].main.operations.forEach((item: string) => log(item));
      userInput = inputNumber(texts.default[lang].input.options);
      while (!isValidNumber(userInput)) {
        log(error(texts.default[lang].errors.invalidInput));
        userInput = inputNumber(texts.default[lang].input.options);
      }
      switch (userInput) {
        case 1:
          console.clear();
          userInput = await login(lang);
          break;
        case 2:
          console.clear();
          userInput = showAbout();
          break;
        default:
          log(error(texts.default[lang].errors.invalidInput));
      }
    }
    process.exit(0);
  } catch (err) {
    log(error(err));
    process.exit(1);
  }
};

const Game = () => {
  mainMenu();
};

export default Game;
