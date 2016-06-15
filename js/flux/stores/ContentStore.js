
import alt from '../alt';
import ContentActions from '../actions/ContentActions';
import ContentSource from '../sources/ContentSource';
import AuthStore from './AuthStore';


export default class ContentStore {

  constructor() {
    this.bindActions(ContentActions);
    this.registerAsync(ContentSource);
  }

  onStartFetch() {
    this.waitFor(AuthStore);
    const credentials = AuthStore.getState();
    // console.log(credentials);
    this.getInstance().requestGenres(credentials);
  }

}

export default alt.createStore(ContentStore, 'ContentStore');
