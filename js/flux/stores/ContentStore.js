
import alt from '../alt';
import ContentActions from '../actions/ContentActions';
import ContentSource from '../sources/ContentSource';
import AuthActions from '../actions/AuthActions';
import AuthStore from './AuthStore';

export default class ContentStore {

  constructor() {
    this._initializeState();
    this.bindActions(ContentActions);
    this.registerAsync(ContentSource);
    this.bindListeners({
      _initializeState: AuthActions.LOGIN,
      _initializeState: AuthActions.LOGOUT,
    });
  }

  _initializeState(){
    this.genres = null;
    this.artists = null;
    this.tracks = null;
    this.selectedItems = null;
  }

  _buidGenres(artists){
    const flattened =  artists.map((artist) => artist.genres )
    .reduce((first, second) => first.concat(second), [])
    .filter((elem, pos, arr) => arr.indexOf(elem) == pos);
    return flattened.map((genre, index) => {
      return { label: genre, id:index, type:'genre', selected:false };
    });
  }

  _mapItems(items){
    return items.map((item) => {
      return { label: item.name, id:item.id, type:item.type, selected:false };
    });
  }

  onFetchSeeds() {
    this.waitFor(AuthStore);
    const credentials = AuthStore.getState();
    this.getInstance().requestTopArtists(credentials);
    this.getInstance().requestTopTracks(credentials);
  }

  onFetchTopArtistsSuccess(response) {
    this.artists = this._mapItems(response.items);
    this.genres = this._buidGenres(response.items);
  }

  onFetchTopTracksSuccess(response) {
    this.tracks = this._mapItems(response.items);
  }

  onSelectItem(item) {
    let ds = [];
    switch (item.type) {
      case 'artist':
        ds = this.artists;
        break;
      case 'genre':
        ds = this.genres;
        break;
      case 'track':
        ds = this.tracks;
        break;
    }
    //TOGGLE SELECTED FLAG
    const index = ds.findIndex(x => x.id === item.id)
    ds[index].selected = !item.selected;

    //UPDATE SELECTED SET
    this.selectedItems = [this.genres, this.artists, this.tracks]
    .reduce((first, second) => first.concat(second), [])
    .filter((item) => item.selected);
  }

  onFetchTopArtistsFailed(error) {
    console.log('FetchTopArtistsFailed::', error);
  }

  onFetchTopTracksFailed(error) {
    console.log('FetchTopTracksFailed::', error);
  }
}

export default alt.createStore(ContentStore, 'ContentStore');
