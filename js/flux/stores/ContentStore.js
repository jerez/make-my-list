
import alt from '../alt';
import ContentActions from '../actions/ContentActions';
import ContentSource from '../sources/ContentSource';
import AuthActions from '../actions/AuthActions';
import AuthStore from './AuthStore';
import OptionsStore from './OptionsStore';

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
    this.recommendations = null;
  }

  _buidGenresFromArtists(artists){
    const flattened =  artists.map((artist) => artist.genres )
    .reduce((first, second) => first.concat(second), [])
    .filter((elem, pos, arr) => arr.indexOf(elem) == pos);
    return flattened.map((genre, index) => {
      return { label: genre, id:index, type:'genre', selected:false };
    });
  }

  _buidGenresFromResponse(response){
    return response.genres.map((genre, index) => {
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
    this.getInstance().requestGenres(credentials);
    this.getInstance().requestTopArtists(credentials);
    this.getInstance().requestTopTracks(credentials);
  }

  onFetchGenresSuccess(response) {
    this.genres = this._buidGenresFromResponse(response);
  }

  onFetchTopArtistsSuccess(response) {
    this.artists = this._mapItems(response.items);
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

  onGetRecommendations(){
    this.waitFor(AuthStore);
    this.waitFor(OptionsStore);
    const credentials = AuthStore.getState();
    const options = OptionsStore.getState().options;
    this.getInstance().requestRecommendations(credentials, options);
  }

  onGetRecommendationsSuccess(response){
    console.log(response);
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

  onGetRecommendationsFailed(error) {
    console.log('getRecommendationsFailed::', error);
  }
}

export default alt.createStore(ContentStore, 'ContentStore');
