import AuthActions from '../actions/AuthActions';
import SpotifyApiClient from 'MakeMyList/js/utils/SpotifyApiClient'

const AuthSource = {
    requestToken: {
      remote(state) {
        return SpotifyApiClient.requestToken(state.authCode);
      },
      success: AuthActions.fetchUser,
      error: AuthActions.logInFailed,
    },

    requestUser: {
      remote(state) {
        return SpotifyApiClient.performRequest(state, 'GET', 'me');
      },
      success: AuthActions.fetchUserSuccess,
      error: AuthActions.fetchUserFailed,
    }

};

export default AuthSource
