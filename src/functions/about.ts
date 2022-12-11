// log
import log, { info } from "../utils/log.js";

export const showAbout = (
  texts: {
    title: string;
    body: string;
    author: string;
    version: string;
  },
  project: { author: string; version: string }
) => {
  log(info(texts.title));
  log(texts.body);
  log(`${texts.author} ${project.author}`);
  log(`${texts.version} ${project.version}`);
};
