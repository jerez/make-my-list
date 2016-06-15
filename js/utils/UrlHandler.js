import AuthActions from 'MakeMyList/js/flux/actions/AuthActions';
import SpotifyConnect from './SpotifyConnect';

export default class UrlHandler {
  static handleOpenURL = (url) => {
    SpotifyConnect.isConnectRedirection(url)
    .then((redirectUri) => {
      SpotifyConnect.parseRedirection(redirectUri)
      .then((code) => {
        AuthActions.login(code);
      })
      .catch((error) => {
        alert(error === 'access_denied' ? 'You should connect with spotify your account!' : `Something went wrong!\n ${error}`)
      });
    })
    .catch((error) => { alert(error) });
  }
}
