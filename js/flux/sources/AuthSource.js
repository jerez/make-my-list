import AuthActions from '../actions/AuthActions';
import ApiClient from './ApiClient'

const AuthSource = {
    requestToken: {
      remote(state) {
        return ApiClient.requestToken(state.authCode);
      },
      success: AuthActions.fetchUser,
      error: AuthActions.logInFailed,
    },

    requestUser: {
      remote(state) {
        return ApiClient.performRequest(state, 'GET', 'me');
      },
      success: AuthActions.fetchUserSuccess,
      error: AuthActions.fetchUserFailed,
    }

};

export default AuthSource
