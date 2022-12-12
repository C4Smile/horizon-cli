import * as texts from "../lang/texts.js";

import cron from "node-cron";

// models
import User from "../driver/user.js";

// log
import log, {
  good,
  error,
  info,
  titleLog,
  materials,
  metals,
  supplies,
  coins,
} from "../utils/log.js";

// terminal;
import { inputString } from "../utils/terminal.js";
import { setInterval } from "timers/promises";

const doOperation = async (theUser: User, lang: string, operation: string) => {
  console.clear();
  const toDo = {
    buildings: () => {},
    researches: () => {},
    arsenal: () => {},
    defenses: () => {},
  };
  await toDo[operation]();
  let a = inputString(texts.default[lang].input.continue);
  return "-1";
};

export const manager = async (theUser: User, lang: string) => {
  try {
    var userInput: string;
    while (userInput !== "z" && userInput !== "b") {
      console.clear();
      log(titleLog(`${texts.default[lang].manager.title}`));
      const { TWF0ZXJpYWxz, TWV0YWxz, U3VwcGxpZXM, Q29pbnM } =
        theUser.Resources;
      log(
        `${texts.default[lang].resources.materials} ${materials(TWF0ZXJpYWxz)}`,
        `${texts.default[lang].resources.metals} ${metals(TWV0YWxz)}`,
        `${texts.default[lang].resources.supplies} ${supplies(U3VwcGxpZXM)}`,
        `${texts.default[lang].resources.coins} ${coins(Q29pbnM)}`
      );
      texts.default[lang].manager.operations.forEach(
        (item: { name: string; label: string; input: string }) => {
          log(`${item.input} - ${item.label}`);
        }
      );
      userInput = inputString(texts.default[lang].input.options);
      const findOperation = texts.default[lang].manager.operations
        .filter((item: { exit: boolean }) => !item.exit)
        .find(
          (item: { input: string }) => item.input === userInput.toLowerCase()
        );
      if (userInput.toLowerCase() !== "z" && userInput.toLowerCase() !== "b") {
        if (findOperation)
          userInput = await doOperation(theUser, lang, findOperation.name);
        else log(error(texts.default[lang].errors.invalidInput));
      }
    }
    if (userInput === "z") process.exit(0);
    else return "b";
  } catch (err) {
    log(error(err));
    process.exit(1);
  }
};
