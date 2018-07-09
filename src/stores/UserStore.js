import { action, observable } from 'mobx';
import UserService from '../services/UserService';

class UserStore {
  constructor() {
    this.login = this.login.bind(this);
    this.UserService = new UserService();
  }

  @observable token = '';

  @action
  async login(creds) {
    this.user = await this.UserService.login(creds);
    this.token = this.user.token;
    console.log(this.token);
  }
}

export default UserStore;
