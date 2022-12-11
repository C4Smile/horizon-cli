// @ts-check

import * as project from "../package.json" assert { type: "json" };

import * as texts from "./lang/texts.js";

// models
import User from "./driver/user.js";

// services
import { login, logout, validateBasicKey } from "./services/auth.js";

// log
import log, { error, good, info, titleLog } from "./utils/log.js";

// terminal;
import { inputString } from "./utils/terminal.js";
import { cleanSession, readSession } from "./utils/file.js";
import { parseDate } from "./utils/parser.js";

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

const collectUserFromLog = async () => {
  log(info(texts.default[lang].infos.recoveringSession));
  // reading from session
  try {
    const { user, token, expiration } = readSession();
    const expirationDate = parseDate(expiration);
    const thisDate = new Date();
    if (expirationDate.getTime() > thisDate.getTime()) {
      log(info(texts.default[lang].infos.sessionExpired));
      return "-1";
    }
    await validateBasicKey(token);
    log(good(`${texts.default[lang].success.sessionRecovery} ${user}`));
  } catch (err) {
    if (String(err).indexOf("500") > -1)
      log(error(texts.default[lang].infos.sessionExpired));
    else {
      log(error(err));
      log(error(texts.default[lang].errors.whileReadingSession));
    }
    cleanSession();
  }
  let a = inputString(texts.default[lang].input.continue);
  return "-1";
};

const operations = {
  signIn: async () => {
    console.clear();
    return await login(lang, theUser);
  },
  building: async () => {},
  researches: async () => {},
  arsenal: async () => {},
  dock: async () => {},
  fleet: async () => {},
  map: async () => {},
  routes: async () => {},
  defenses: async () => {},
  signOut: async () => {
    console.clear();
    return await logout(theUser, lang);
  },
  about: () => {
    console.clear();
    return showAbout();
  },
  exit: () => process.exit(0),
};

const doOperation = async (operation: string) => await operations[operation]();

const mainMenu = async () => {
  await collectUserFromLog();
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
          log(`${item.input} - ${item.label}`);
      });
      userInput = inputString(texts.default[lang].input.options);
      const findOperation = texts.default[lang].main.operations.find(
        (item: {
          input: string;
          label: string;
          logged: number;
          name: string;
        }) => item.input === userInput.toLowerCase()
      );
      if (findOperation) userInput = await doOperation(findOperation.name);
      else log(error(texts.default[lang].errors.invalidInput));
      switch (userInput) {
        case "i":
          break;
        case "a":
          break;
        default:
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
