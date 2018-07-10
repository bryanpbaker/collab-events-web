import { action, observable, autorun } from 'mobx';
import UserService from '../services/UserService';

class UserStore {
  constructor() {
    this.UserService = new UserService();

    // isAuthorized will be null on page refresh - this gives us a chance to
    // authorize the user if they're already logged in or kick them out if they're not
    if (this.isAuthorized === null) {
      this.authorize();
    }
  }

  @observable user;
  @observable requestPending = false;
  @observable isAuthorized = null;

  /**
   * log the user in with username and password
   */
  @action
  login = async creds => {
    this.requestPending = true;
    const auth = await this.UserService.login(creds);

    if (auth) {
      this.user = auth.user;
      localStorage.setItem('authenticatedUser', JSON.stringify(auth.user));
      this.isAuthorized = true;
      this.requestPending = false;
    }
  };

  /**
   * verify the user's JWT
   */
  @action
  authorize = async () => {
    if (localStorage.getItem('authenticatedUser')) {
      this.requestPending = true;
      const { token } = JSON.parse(localStorage.getItem('authenticatedUser'));
      const auth = await this.UserService.authorizeUser(token);
      this.isAuthorized = auth === 200;
      this.requestPending = false;
    }

    return false;
  };

  @action
  logout = async () => {
    localStorage.removeItem('authenticatedUser');
    this.isAuthorized = false;
    this.requestPending = false;
  };
}

export default new UserStore();
