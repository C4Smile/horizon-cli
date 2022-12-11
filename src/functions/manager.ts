import * as texts from "../lang/texts.js";

// models
import User from "../driver/user.js";

// log
import log, { good, error, info, titleLog } from "../utils/log.js";

// terminal;
import { inputString } from "../utils/terminal.js";

const doOperation = async (theUser: User, lang: string, operation: string) => {
  console.clear();
  const toDo = {
    buildings: () => {},
    researches: () => {},
    arsenal: () => {},
    defenses: () => {},
    back: () => {},
    exit: () => process.exit(0),
  };
  await toDo[operation]();
  let a = inputString(texts.default[lang].input.continue);
  return "-1";
};

export const manager = async (theUser: User, lang: string) => {
  try {
    let userInput: string;
    while (userInput !== "z" && userInput !== "b") {
      console.clear();
      log(titleLog(`${texts.default[lang].manager.title}`));
      texts.default[lang].manager.operations.forEach(
        (item: { name: string; label: string; input: string }) => {
          log(`${item.input} - ${item.label}`);
        }
      );
      userInput = inputString(texts.default[lang].input.options);
      const findOperation = texts.default[lang].manager.operations.find(
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
