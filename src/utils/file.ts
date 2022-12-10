import { readSync, readdirSync, writeFileSync, rmSync, rmdirSync } from "fs";

// log connection
export const updateLog = (user: string, token: string, expiration: string) => {
  writeFileSync(
    "./user-logs",
    `${user} connected at ${new Date().toUTCString()} with ${token} ${expiration}`
  );
};
