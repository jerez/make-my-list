
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
    this.getInstance().requestTopArtists(credentials);
    this.getInstance().requestTopTracks(credentials);
  }

  onFetchGenresSuccess(response) {
    this.genres = response.genres;
  }

  onFetchTopArtistsSuccess(response) {
    this.artists = response.items;
  }

  onFetchTopTracksSuccess(response) {
    this.tracks = response.items;
  }

  onFetchGenresFailed(error) {
    console.log('FetchGenresFailed::', error);
  }

  onFetchTopArtistsFailed(error) {
    console.log('FetchTopArtistsFailed::', error);
  }

  onFetchTopTracksFailed(error) {
    console.log('FetchTopTracksFailed::', error);
  }
}

export default alt.createStore(ContentStore, 'ContentStore');
