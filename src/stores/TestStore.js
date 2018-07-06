import { observable, action } from 'mobx';

class TestStore {
  constructor() {
    this.toggle = this.toggle.bind(this);
  }

  @observable testProp = 'hello';

  @action
  toggle() {
    this.testProp = 'there';
  }
}

const testStore = new TestStore();
export default testStore;
