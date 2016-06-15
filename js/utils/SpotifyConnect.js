import config from './config';
import { Linking } from 'react-native';
import url from 'url';
import querystring from 'querystring';

export default class SpotifyConnect {
  static showLogin() {
    const payload =  {
      client_id: config.Spotify.clientId,
      response_type: 'code',
      redirect_uri: config.Spotify.redirectUri,
      scope: 'user-top-read playlist-modify-public',
      show_dialog:'true'
    };

    const authUrl = url.format({protocol:'https', host:config.Spotify.accountHost, pathname:'authorize', query:payload});

    Linking.canOpenURL(authUrl)
    .then(supported => {
      if (supported) {
        Linking.openURL(authUrl);
      }
    });
  }

  static isConnectRedirection(uri){
    const parsedUrl = url.parse(uri);
    return new Promise((resolve, reject) => {
      if (!this._canHandleUrl(parsedUrl)) {
        reject(`Can't handle uri ${uri}`);
      } else {
        resolve(parsedUrl);
      }
    });
  }

  static parseRedirection(parsedUrl){
    const qs = querystring.parse(parsedUrl.query)
    return new Promise((resolve, reject) => {
      if (qs.hasOwnProperty('code')) {
        resolve(qs.code);
      } else {
        const error = qs.hasOwnProperty('error') ? qs.error: 'unknown';
        reject(error);
      }
    });
  }

  static _canHandleUrl = (parsedUrl) =>{
    return (parsedUrl.protocol === 'makemylist:' && parsedUrl.host === 'login');
  }
}
