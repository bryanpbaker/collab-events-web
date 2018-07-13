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

  @observable userProfile;
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
      this.userProfile = auth.user.profile;
      this.isAuthorized = true;
      localStorage.setItem('authenticatedUser', JSON.stringify(auth.user));

      this.requestPending = false;
    }
  };

  /**
   * verify the user's JWT and set this.userProfile
   */
  @action
  authorize = async () => {
    const localStorageUser = JSON.parse(
      localStorage.getItem('authenticatedUser')
    );

    if (localStorageUser) {
      this.requestPending = true;
      const auth = await this.UserService.authorizeUser(localStorageUser.token);
      this.isAuthorized = auth === 200;
      this.requestPending = false;

      // if the localStorage user is good
      // set it to this.userProfile
      if (this.isAuthorized) {
        this.userProfile = localStorageUser.profile;
      }

      return true;
    }

    // if there's nothing in localStorage - set isAuthorized to false
    this.isAuthorized = false;
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
