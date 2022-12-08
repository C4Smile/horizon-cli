// @ts-check

import log, { titleLog } from "./utils/log.js";
import * as project from "../package.json" assert { type: "json" };

import * as texts from "./lang/texts.js";

const lang = "es";

const mainMenu = () => {
  console.log(texts, lang);
  log(
    titleLog(`${texts.default[lang].main.title} ver:${project.default.version}`)
  );
  texts.default[lang].main.operations.forEach((item: string) => log(item));
};

const Game = () => {
  mainMenu();
};

export default Game;
