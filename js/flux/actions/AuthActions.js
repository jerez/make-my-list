import alt from '../alt';
import SpotifyConnect from 'MakeMyList/js/utils/SpotifyConnect';

class AuthActions {
  constructor() {
    this.generateActions(
      'login',
      'credentialsReceived',
      'logInFailed',
      'fetchUserSuccess',
      'fetchUserFailed',
      'logout',
    );
  }
  showLogin(locations) {
    SpotifyConnect.showLogin();
    // just to dispatch action
    return true;
  }
}
export default alt.createActions(AuthActions);
