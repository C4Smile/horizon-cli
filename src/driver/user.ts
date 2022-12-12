// services
import {
  fetchUser,
  updateNickService,
  updateEmailService,
  updateNationService,
} from "../services/user/post.js";

// files
import {
  cleanSession,
  logActions,
  updateLog,
  writeSession,
} from "../utils/file.js";

// logs
import log, { error } from "../utils/log.js";

export default class User {
  id: string;
  token: string;
  user: string;
  nick: string;
  nation: string;
  email: string;
  resources: {
    TWF0ZXJpYWxz: number;
    TWV0YWxz: number;
    U3VwcGxpZXM: number;
    Q29pbnM: number;
  };
  buildings: {};
  technologies: {};
  ships: {};

  constructor() {
    this.id = "";
  }

  async initialize(id: string, token: string, expiration: string) {
    this.id = id;
    this.token = token;
    try {
      updateLog(logActions.signIn, { user: id });
      writeSession(id, token, expiration);
      const response = await fetchUser(id, token);
      const {
        user,
        nick,
        nation,
        email,
        resources,
        buildings,
        technologies,
        ships,
      } = response.data;
      this.user = user;
      this.nick = nick;
      this.nation = nation;
      this.email = email;
      this.resources = resources;
      this.buildings = buildings;
      this.technologies = technologies;
      this.ships = ships;
    } catch (err) {
      log(error(err));
    }
  }

  logOut() {
    updateLog(logActions.signOut, { user: this.id });
    cleanSession();
    this.id = "";
    this.token = "";
    this.user = "";
    this.nick = "";
    this.nation = "";
    this.email = "";
    this.resources = {
      TWF0ZXJpYWxz: 0,
      TWV0YWxz: 0,
      U3VwcGxpZXM: 0,
      Q29pbnM: 0,
    };
    this.buildings = {};
    this.technologies = {};
    this.ships = {};
  }

  // getter
  get Id(): string {
    return this.id;
  }

  get User(): string {
    return this.user;
  }

  get Nick(): string {
    return this.nick;
  }

  get Nation(): string {
    return this.nation;
  }

  get Email(): string {
    return this.email;
  }

  get Resources(): {
    TWF0ZXJpYWxz: number;
    TWV0YWxz: number;
    U3VwcGxpZXM: number;
    Q29pbnM: number;
  } {
    return this.resources;
  }

  get Buildings(): object {
    return this.buildings;
  }

  get Technologies(): object {
    return this.technologies;
  }

  get Ships(): object {
    return this.ships;
  }

  set Id(newId: string) {
    this.id = newId;
  }

  /**
   *
   * @param newNick
   * @throws NETWORK
   */
  async updateNick(newNick: string) {
    await updateNickService(newNick, this.id, this.token);
  }

  set Nick(newNick: string) {
    this.updateNick(newNick);
    this.nick = newNick;
  }

  /**
   *
   * @param newNation
   * @throws NETWORK
   */
  async updateNation(newNation: string) {
    await updateNationService(newNation, this.id, this.token);
  }

  set Nation(newNation: string) {
    this.updateNation(newNation);
    this.nation = newNation;
  }

  /**
   *
   * @param newEmail
   * @throws NETWORK
   */
  async updateEmail(newEmail: string) {
    await updateEmailService(newEmail, this.id, this.token);
  }

  set Email(newEmail: string) {
    this.updateEmail(newEmail);
    this.email = newEmail;
  }
}
