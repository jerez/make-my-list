
import alt from '../alt';
import moment from 'moment';
import { AsyncStorage } from 'react-native';
import ContentActions from '../actions/ContentActions';
import ContentSource from '../sources/ContentSource';
import AuthActions from '../actions/AuthActions';
import AuthStore from './AuthStore';
import OptionsStore from './OptionsStore';

const STORAGE_KEY = 'RECOMMENDATIONS';

export default class ContentStore {

  constructor() {
    this.on('init', () => {
      this._loadSavedResults();
    });
    this._initializeState();
    this.bindActions(ContentActions);
    this.registerAsync(ContentSource);
    this.bindListeners({
      _handleSessionChange: AuthActions.LOGIN,
      _handleSessionChange: AuthActions.LOGOUT,
    });
  }

  async _loadSavedResults() {
    try {
      this.recommendations = JSON.parse(await AsyncStorage.getItem(STORAGE_KEY));
      this.getInstance().emitChange();
    } catch (error) {
      this.recommendations = null;
      console.log(error);
    }
  }

  _initializeState(){
    this.genres = null;
    this.artists = null;
    this.tracks = null;
    this.selectedItems = null;
  }

  _handleSessionChange(){
    this._initializeState();
    AsyncStorage.removeItem(STORAGE_KEY);
  }

  _buidGenresFromArtists(artists){
    const flattened =  artists.map((artist) => artist.genres )
    .reduce((first, second) => first.concat(second), [])
    .filter((elem, index, self) => arr.indexOf(elem) == index);
    return flattened.map((genre, index) => {
      return { label: genre, id:index, type:'genre', selected:false };
    });
  }

  _buildTrackList(response){
    return response.tracks.map((track)=>{
      let leanTrack = {
        id: track.id,
        name: track.name,
        previewUrl: track.preview_url,
        album: track.album.name,
        artists: track.artists.map((artist)=>artist.name),
      };
      if(track.album.images.length > 0){
        leanTrack.image = track.album.images
        .reduce((first, second) => {
          if (first.heigh > second.height) return first;
          else return second;
        }).url;
      }
      return leanTrack;
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
    if(!this.recommendations){
      this.recommendations = [];
    }
    if (response.tracks && response.tracks.length > 0) {
      this.recommendations.push({
        name: `mml-${moment().format('MMMM-DD-YYYY-hh-mm-ss')}`,
        created: Date.now(),
        tracks: this._buildTrackList(response),
      });
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(this.recommendations));
    }
  }

  onDeleteResult(result){
    const index = this.recommendations.findIndex((item) => item.name == result.name);
    if (index >= 0) {
      this.recommendations.splice(index, 1);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(this.recommendations));
    }
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
