
import alt from '../alt';
import OptionsActions from '../actions/OptionsActions';

export default class OptionsStore {

  constructor() {
    this._initializeState();
    this.bindActions(OptionsActions);
  }

  _initializeState(){
    this.options = [
      {
        name: 'acousticness',
        enabled: false,
        value: 0.5,
        description:'A confidence measure of whether the track is acoustic.',
      },
      {
        name: 'danceability',
        enabled: false,
        value: 0.5,
        description:'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.',
      },
      {
        name: 'energy',
        enabled: false,
        value: 0.5,
        description:'Energy represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.',
      },
      {
        name: 'liveness',
        enabled: false,
        value: 0.5,
        description:'Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live.',
      },
      {
        name: 'valence',
        enabled: false,
        value: 0.5,
        description:'A measure describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive, while tracks with low valence sound more negative.',
      },
    ]
  }

  setOptions(options) {
    this.options = options;
  }
}

export default alt.createStore(OptionsStore, 'OptionsStore');
