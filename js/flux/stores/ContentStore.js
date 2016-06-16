
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
    const index = ds.findIndex(x => x.id === item.id)
    ds[index].selected = !item.selected;
  }

  onFetchTopArtistsFailed(error) {
    console.log('FetchTopArtistsFailed::', error);
  }

  onFetchTopTracksFailed(error) {
    console.log('FetchTopTracksFailed::', error);
  }
}

export default alt.createStore(ContentStore, 'ContentStore');
