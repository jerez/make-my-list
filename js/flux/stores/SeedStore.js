
import alt from '../alt';
import SeedActions from '../actions/SeedActions';
import SeedSource from '../sources/SeedSource';

export default class SeedStore {

  constructor() {
    this.bindActions(SeedActions);
    this.registerAsync(SeedSource);
  }
}

export default alt.createStore(SeedStore, 'SeedStore');
