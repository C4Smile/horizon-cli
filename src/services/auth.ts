// @ts-check
import md5 from "md5";
import axios from "axios";

import config from "../config.js";

import * as texts from "../lang/texts.js";

// models
import User from "../driver/user.js";

// logs
import log, { error, good, info } from "../utils/log.js";

// terminal
import { inputPassword, inputString } from "../utils/terminal.js";

// loading
import load from "../utils/loading.js";

/**
 *
 * @param lang
 * @returns
 */
export const login = async (lang: string, userClass: User) => {
  log(info(texts.default[lang].main.login.title));
  while (true) {
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
      const { id, token, expiration } = response.data.data;
      await userClass.initialize(id, token, expiration);
      load.stop();
      log(good(texts.default[lang].main.login.successfully));
      let a = inputString(texts.default[lang].input.continue);
      return "-1";
    } catch (err) {
      if (String(err).indexOf("401") > -1)
        log(error(texts.default[lang].errors.wrongCredentials));
      else log(error(err));
    }
  }
};

export const logout = async (user: User, lang: string) => {
  log(info(texts.default[lang].main.logout.title));
  try {
    load.start();
    await axios.post(
      `${config.apiURL}user/logout`,
      { user: user.Id },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    user.logOut();

    load.stop();
    log(good(texts.default[lang].main.logout.successfully));
    let a = inputString(texts.default[lang].input.continue);
    return "-1";
  } catch (err) {
    log(error(err));
  }
};
