import config from "../config.js";
import md5 from "md5";
import axios from "axios";
import * as texts from "../lang/texts.js";

// logs
import log, { error, info } from "../utils/log.js";

// terminal
import { inputPassword, inputString } from "../utils/terminal.js";

// loading
import load from "../utils/loading.js";

/**
 *
 * @param lang
 * @returns
 */
export const login = async (lang: string) => {
  while (true) {
    log(info(texts.default[lang].main.login.title));
    let userName = inputString(texts.default[lang].main.login.user);
    let userPassword = inputPassword(texts.default[lang].main.login.password);
    try {
      load.start();
      const response = await axios.post(
        `${config.apiURL}user/login`,
        { user: userName, password: md5(userPassword) },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      load.stop();
    } catch (err) {
      log(error(err));
    }
  }
};
