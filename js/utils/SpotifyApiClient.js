import config from './config';
import url from 'url';
import querystring from 'querystring';
import { Buffer } from 'buffer';

class SpotifyApiClient {

  static performRequest(credentials, method, path){
    const requestUri = url.format({protocol:'https', host:config.Spotify.apiHost, pathname:`v1/${path}`});
    return fetch(requestUri, {
      method: method,
      headers: {
        'Authorization': `${credentials.tokenType} ${credentials.authToken}`,
      }
    }).then((response) => { return response.json(); });
  }

  static requestToken(code){
    const tokenUrl = url.format({protocol:'https', host:config.Spotify.accountHost, pathname:'api/token'});
    const base64Hash = new Buffer(`${config.Spotify.clientId}:${config.Spotify.clientSecret}`).toString('base64');
    const payload = querystring.stringify({grant_type: 'authorization_code', code: code, redirect_uri: config.Spotify.redirectUri});

    return fetch(tokenUrl, {
      method: 'POST',
      body: payload,
      headers: {
        'Authorization': `Basic ${base64Hash}`,
        'Content-Type':'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      }
    }).then((response) => { return response.json(); });
  }
}

export default SpotifyApiClient;
