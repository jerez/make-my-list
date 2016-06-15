
import alt from '../alt';
import ContentActions from '../actions/ContentActions';
import ContentSource from '../sources/ContentSource';
import AuthStore from './AuthStore';


export default class ContentStore {

  constructor() {
    this.genres = [];
    this.artists = [];
    this.tracks = [];
    this.bindActions(ContentActions);
    this.registerAsync(ContentSource);
  }

  onFetchSeeds() {
    this.waitFor(AuthStore);
    const credentials = AuthStore.getState();
    this.getInstance().requestGenres(credentials);
  }

  onFetchGenresSuccess(response) {
    this.genres = response.genres;
  }

  onFetchGenresFailed(error) {
    console.log('FetchGenresFailed::', error);
  }

}

export default alt.createStore(ContentStore, 'ContentStore');
