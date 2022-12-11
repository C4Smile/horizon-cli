import * as project from "../../package.json" assert { type: "json" };

import * as texts from "../lang/texts.js";

// models
import User from "../driver/user.js";

// services
import { login, logout } from "../services/auth.js";

// log
import log, { error, info, titleLog } from "../utils/log.js";

// terminal;
import { inputString } from "../utils/terminal.js";

// menu
import { dock } from "./dock.js";
import { manager } from "./manager.js";
import { showAbout } from "./about.js";

const doOperation = async (theUser: User, lang: string, operation: string) => {
  console.clear();
  const toDo = {
    signIn: async () => {
      await login(lang, theUser);
    },
    manager: async () => {
      await manager(theUser, lang);
    },
    dock: async () => {
      await dock(theUser, lang);
    },
    signOut: async () => {
      await logout(theUser, lang);
    },
    about: () =>
      showAbout(texts.default[lang].main.about, {
        author: project.default.author,
        version: project.default.version,
      }),
    exit: () => process.exit(0),
  };
  await toDo[operation]();
  let a = inputString(texts.default[lang].input.continue);
  return "-1";
};

const userLogged = (theUser: User) => theUser.Id.length;

export const mainMenu = async (theUser: User, lang: string) => {
  try {
    let userInput: string;
    while (userInput !== "z") {
      console.clear();
      log(
        titleLog(
          `${texts.default[lang].main.title} ver:${project.default.version}`
        )
      );
      if (userLogged(theUser))
        log(`${info(texts.default[lang].main.user)} ${theUser.nick}`);
      texts.default[lang].main.operations.forEach(
        (item: {
          name: string;
          label: string;
          logged: number;
          input: string;
        }) => {
          if (
            item.logged === -1 ||
            (userLogged(theUser) && item.logged === 1) ||
            (!userLogged(theUser) && item.logged === 0)
          )
            log(`${item.input} - ${item.label}`);
        }
      );
      userInput = inputString(texts.default[lang].input.options);
      const findOperation = texts.default[lang].main.operations.find(
        (item: {
          input: string;
          label: string;
          logged: number;
          name: string;
        }) => item.input === userInput.toLowerCase()
      );
      if (findOperation)
        userInput = await doOperation(theUser, lang, findOperation.name);
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
