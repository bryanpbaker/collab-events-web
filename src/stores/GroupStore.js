import { observable, action } from 'mobx';
import GroupService from '../services/GroupService';

class GroupStore {
  constructor() {
    this.GroupService = new GroupService();
  }

  @observable requestPending = false;
  @observable groups = [];

  @action
  fetchGroups = async () => {
    this.groups = await this.GroupService.fetchGroups();
  };

  @action
  createGroup = async () => {
    alert('CREATE GROUP!');
  };
}

export default new GroupStore();
