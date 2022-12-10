// services
import { fetchUser } from "../services/user/post.js";

// files
import { updateLog } from "../utils/file.js";
import log, { error } from "../utils/log.js";

export default class User {
  id: string;
  token: string;

  user: string;
  nick: string;
  nation: string;
  email: string;
  resources: {};
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
      updateLog(id, token, expiration);
      const response = await fetchUser(id, token);
      const { user, nick, nation, email, resources, buildings, technologies } =
        response.data;
      this.user = user;
      this.nick = nick;
      this.nation = nation;
      this.email = email;
      this.resources = resources;
      this.buildings = buildings;
      this.technologies = technologies;
    } catch (err) {
      log(error(err));
    }
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

  get Resources(): object {
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
}
