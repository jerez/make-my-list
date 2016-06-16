
import alt from '../alt';
import AuthActions from '../actions/AuthActions';
import AuthSource from '../sources/AuthSource';
import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'AUTH_STORE';

export default class AuthStore {

  constructor() {
    this.bindActions(AuthActions);
    this.registerAsync(AuthSource);
    this.on('init', () => {
      this._loadInitialState();
    });
    this.on('error', (err, payload, currentState) => {
      this._clearState();
    });
    this.on('afterEach', (payload) => {
      AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(payload.state));
    });
  }

  async _loadInitialState() {
    try {
      const state = JSON.parse(await AsyncStorage.getItem(STORAGE_KEY));
      if (state !== null){
        Object.assign(this, state);
        this.getInstance().emitChange();
      } else {
        this._clearState();
      }
    } catch (error) {
      this._clearState();
    }
  }

  _clearState() {
    const cleanState = {
      authCode: null,
      authToken: null,
      refreshToken: null,
      tokenType: null,
      user: null,
    };
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cleanState));
    Object.assign(this, cleanState);
    this.getInstance().emitChange();
  }

  onLogin(code) {
    this.authCode = code;
    this.getInstance().requestToken();
  }

  onFetchUser(credentials) {
    this.authToken = credentials.access_token;
    this.refreshToken = credentials.refresh_token;
    this.tokenType = credentials.token_type;
    this.getInstance().requestUser();
  }

  onFetchUserSuccess(response) {
    if(response.hasOwnProperty('error')){
      this._clearState();
    } else {
      this.user = response;
    }
  }

  onLogInFailed(error) {
    console.log('logInFailed::',error);
    this._clearState();
  }

  onFetchUserFailed(error) {
    console.log('logInFailed::', error);
    this._clearState();
  }

  onLogout() {
    console.log('logout');
    this._clearState();
  }
}

export default alt.createStore(AuthStore, 'AuthStore');
