import { action, observable } from 'mobx';
import UserService from '../services/UserService';

class UserStore {
  constructor() {
    this.UserService = new UserService();
  }

  @observable user = JSON.parse(this.checkAuth()) || null;
  @observable requestPending = false;

  @action checkAuth = () => localStorage.getItem('authenticatedUser');

  @action
  login = async creds => {
    this.requestPending = true;
    const auth = await this.UserService.login(creds);

    if (auth) {
      this.user = auth.user;
      localStorage.setItem('authenticatedUser', JSON.stringify(auth.user));
      this.requestPending = false;
    }
  };
}

export default new UserStore();
