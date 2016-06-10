import constants from '../../constants';
import url from 'url';
import querystring from 'querystring';
import AuthActions from '../actions/AuthActions';
import { Buffer } from 'buffer';

const AuthSource = {
    requestToken: {
      remote(state) {
        const tokenUrl = url.format({protocol:'https', host:constants.Spotify.accountHost, pathname:'api/token'});
        const base64Hash = new Buffer(`${constants.Spotify.clientId}:${constants.Spotify.clientSecret}`).toString('base64');
        const payload = querystring.stringify({grant_type: 'authorization_code', code: state.authCode, redirect_uri: constants.Spotify.redirectUri});

        return fetch(tokenUrl, {
          method: 'POST',
          body: payload,
          headers: {
            'Authorization': `Basic ${base64Hash}`,
            'Content-Type':'application/x-www-form-urlencoded',
            'Accept': 'application/json',
          }
        }).then((response) => { return response.json(); });
      },
      success: AuthActions.fetchUser,
      error: AuthActions.logInFailed,
    },

    requestUser: {
      remote(state) {
        const profileUrl = url.format({protocol:'https', host:constants.Spotify.apiHost, pathname:'v1/me/'});

        return fetch(profileUrl, {
          method: 'GET',
          headers: {
            'Authorization': `${state.tokenType} ${state.authToken}`,
          }
        }).then((response) => { return response.json(); });
      },
      success: AuthActions.fetchUserSuccess,
      error: AuthActions.fetchUserFailed,
    }

};

export default AuthSource
