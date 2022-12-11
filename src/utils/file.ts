import { readSync, readdirSync, writeFileSync, rmSync, rmdirSync } from "fs";

export const logActions = {
  signIn: 1,
  signOut: 2,
};

// log connection
export const updateLog = (
  action: number,
  options: {
    user?: string;
    token?: string;
    expiration?: string;
  }
) => {
  switch (action) {
    case logActions.signIn: {
      const { user, token, expiration } = options;
      writeFileSync(
        "./user.log",
        `${user} connected at ${new Date().toUTCString()} with ${token} ${expiration}`
      );
      break;
    }
    case logActions.signOut: {
      const { user } = options;
      writeFileSync(
        "./user.log",
        `${user} disconnected at ${new Date().toUTCString()}`
      );
    }
  }
};
