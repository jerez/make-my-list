
import alt from '../alt';
import AuthActions from '../actions/AuthActions';
import AuthSource from '../sources/AuthSource';

export default class AuthStore {

  constructor() {
    this._setInitialState();
    this.bindActions(AuthActions);
    this.registerAsync(AuthSource);
  }

  _setInitialState = () => {
    this.authCode = null;
    this.authToken = null;
    this.refreshToken = null;
    this.tokenType = null;
    this.user = null;
  }

  onLogin(code) {
    this.authCode = code;
    this.getInstance().requestToken();
  }

  onLogInFailed(error) {
    console.log('logInFailed::',error);
  }

  onFetchUser(credentials) {
    this.authToken = credentials.access_token;
    this.refreshToken = credentials.refresh_token;
    this.tokenType = credentials.token_type;
    this.getInstance().requestUser();
  }

  onFetchUserSuccess(response) {
    if(response.hasOwnProperty('error')){
      this._setInitialState();
    } else {
      this.user = response;
    }
  }

  onFetchUserFailed(error) {
    console.log('logInFailed::', error);
    this._setInitialState();
  }

  onLogOut() {
    console.log('logout');
    this._setInitialState();
  }
}

export default alt.createStore(AuthStore, 'AuthStore');
