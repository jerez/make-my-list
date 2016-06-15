
import alt from '../alt';
import ContentActions from '../actions/ContentActions';
import ContentSource from '../sources/ContentSource';

export default class ContentStore {

  constructor() {
    this.bindActions(SeedActions);
    this.registerAsync(SeedSource);
  }
}

export default alt.createStore(ContentStore, 'ContentStore');
