
// services
import  

class User {
  id: string;

  constructor() {
    this.id = "";
  }

  async initialize(id: string, token, expiration) {

  }

  get Id(): string {
    return this.id;
  }

  set Id(newId: string) {
    this.id = newId;
  }
}
