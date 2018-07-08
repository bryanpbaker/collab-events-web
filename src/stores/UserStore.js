import { action, observable } from 'mobx';

class UserStore {
  constructor() {
    this.change = this.change.bind(this);
  }

  @observable user = 'bryan';

  @action
  change() {
    this.user = 'bekah';
  }
}

export default UserStore;
