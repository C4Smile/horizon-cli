import {
  readSync,
  readdirSync,
  writeFileSync,
  rmSync,
  rmdirSync,
  appendFileSync,
  readFileSync,
} from "fs";

export const logActions = {
  signIn: 1,
  signOut: 2,
};

// log connection
export const updateLog = (
  action: number,
  options: {
    user?: string;
  }
) => {
  switch (action) {
    case logActions.signIn: {
      const { user } = options;
      appendFileSync(
        "./user.log",
        `\n${user} connected at ${new Date().toUTCString()}`
      );
      break;
    }
    case logActions.signOut: {
      const { user } = options;
      appendFileSync(
        "./user.log",
        `\n${user} disconnected at ${new Date().toUTCString()}`
      );
    }
  }
};

export const writeSession = (user: string, token: string, expiration: string) =>
  writeFileSync(
    "./session",
    `${Buffer.from(`${user}[!]${token}[!]${expiration}`).toString("base64")}`
  );

export const cleanSession = () => {
  writeFileSync("/session", "");
};

export const readSession = () => {
  const [user, token, expiration] = Buffer.from(
    readFileSync("./session", { encoding: "utf-8" }),
    "base64"
  )
    .toString()
    .split("[!]");
  return { user, token, expiration };
};
