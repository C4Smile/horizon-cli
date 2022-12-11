// @ts-check

import * as project from "../package.json" assert { type: "json" };

import * as texts from "./lang/texts.js";

// models
import User from "./driver/user.js";

// services
import { login } from "./services/auth.js";

// log
import log, { error, info, titleLog } from "./utils/log.js";

// terminal;
import { inputNumber, inputString } from "./utils/terminal.js";

// validation
import { isValidNumber } from "./utils/validation.js";

// globals
const theUser = new User();
const lang = "es";

const showAbout = () => {
  log(info(texts.default[lang].main.about.title));
  log(texts.default[lang].main.about.body);
  log(`${texts.default[lang].main.about.author} ${project.default.author}`);
  log(`${texts.default[lang].main.about.version} ${project.default.version}`);
  let a = inputString(texts.default[lang].input.continue);
  return "-1";
};

const userLogged = () => theUser.Id.length;

const mainMenu = async () => {
  try {
    let userInput: string;
    while (userInput !== "z") {
      console.clear();
      log(
        titleLog(
          `${texts.default[lang].main.title} ver:${project.default.version}`
        )
      );
      if (userLogged())
        log(`${info(texts.default[lang].main.user)} ${theUser.nick}`);
      texts.default[lang].main.operations.forEach((item) => {
        if (
          item.logged === -1 ||
          (userLogged() && item.logged === 1) ||
          (!userLogged() && item.logged === 0)
        )
          log(item.label);
      });
      userInput = inputString(texts.default[lang].input.options);
      switch (userInput) {
        case "i":
          console.clear();
          userInput = await login(lang, theUser);
          break;
        case "a":
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
