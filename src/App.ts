// @ts-check

import * as texts from "./lang/texts.js";

// services
import { validateBasicKey } from "./services/auth.js";

// models
import User from "./driver/user.js";

// log
import log, { error, good, info, titleLog } from "./utils/log.js";

// terminal;
import { inputString } from "./utils/terminal.js";
import { cleanSession, readSession } from "./utils/file.js";
import { parseDate } from "./utils/parser.js";

import { mainMenu } from "./functions/main.js";

// globals
const theUser = new User();
const lang = "es";

const collectUserFromLog = async () => {
  log(info(texts.default[lang].infos.recoveringSession));
  // reading from session
  try {
    const { user, token, expiration } = readSession();
    if (user.length && token.length && expiration.length) {
      const expirationDate = parseDate(expiration);
      const thisDate = new Date();
      if (expirationDate.getTime() > thisDate.getTime()) {
        log(info(texts.default[lang].infos.sessionExpired));
        return "-1";
      }
      await validateBasicKey(token);
      log(good(`${texts.default[lang].success.sessionRecovery} ${user}`));
    } else log(error(texts.default[lang].errors.whileReadingSession));
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

const Game = async () => {
  await collectUserFromLog();
  mainMenu(theUser, lang);
};

export default Game;
