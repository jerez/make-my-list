import alt from '../alt';
import SpotifyConnect from 'MakeMyList/js/utils/SpotifyConnect';

class AuthActions {
  constructor() {
    this.generateActions(
      'login',
      'logInFailed',
      'fetchUser',
      'fetchUserSuccess',
      'fetchUserFailed',
      'logOut',
    );
  }
  showLogin(locations) {
    SpotifyConnect.showLogin();
    // just to dispatch action
    return true;
  }
}
export default alt.createActions(AuthActions);
