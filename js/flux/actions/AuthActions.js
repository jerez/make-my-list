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
  }
}
export default alt.createActions(AuthActions);
