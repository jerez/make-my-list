import config from './config';
import url from 'url';
import querystring from 'querystring';
import { Buffer } from 'buffer';
import AuthActions from 'MakeMyList/js/flux/actions/AuthActions';


class SpotifyApiClient {

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

  static refreshToken(credentials){
    const tokenUrl = url.format({protocol:'https', host:config.Spotify.accountHost, pathname:'api/token'});
    const base64Hash = new Buffer(`${config.Spotify.clientId}:${config.Spotify.clientSecret}`).toString('base64');
    const payload = querystring.stringify({grant_type: 'refresh_token', refresh_token: credentials.refreshToken});

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

  static authenticatedRequest(credentials, requestPromise){
    const limitTimeStamp = credentials.expiresAt - (10 * 60 * 1000);
    const shouldRefresh =  (new Date()).getTime() >= limitTimeStamp;
    if (shouldRefresh) {
      return SpotifyApiClient.refreshToken(credentials)
      .then((response) => {
        if(response.hasOwnProperty('error')){
          return Promise.reject(response.error);
        }else{
          AuthActions.credentialsReceived(response);
          return requestPromise;
        }
      })
      .catch((error) => {
        AuthActions.logInFailed(error);
      });
    } else {
      return requestPromise
    }
  }

  static performRequest(credentials, method, path){
    const requestUri = url.format({protocol:'https', host:config.Spotify.apiHost, pathname:`v1/${path}`});
    const request = fetch(requestUri, {
      method: method,
      headers: {
        'Authorization': `${credentials.tokenType} ${credentials.authToken}`,
      }
    }).then((response) => response.json());

    return SpotifyApiClient.authenticatedRequest(credentials, request);
  }

  static getRecommendations(credentials, seed, options){
    const seedTracks = seed.filter((item)=>item.type==='track').map((item)=>item.id).join();
    const seedArtists = seed.filter((item)=>item.type==='artist').map((item)=>item.id).join();
    const seedGenres = seed.filter((item)=>item.type==='genre').map((item)=>item.label).join();
    const seedOptions = options
      .filter((option) => option.enabled)
      .map((option) => {
        return {[`target_${option.name}`]: option.value} ;
      })
      .reduce((result, item) => {
        const key = Object.keys(item)[0];
        result[key] = item[key];
        return result;
      }, {});

    const payload = Object.assign({
      seed_artists: seedArtists,
      seed_tracks: seedTracks,
      seed_genres: seedGenres,
    }, seedOptions);

    const requestUri = url.format({protocol:'https', host:config.Spotify.apiHost, pathname:'v1/recommendations', query:payload});

    const request = fetch(requestUri, {
      method: 'GET',
      headers: {
        'Authorization': `${credentials.tokenType} ${credentials.authToken}`,
      }
    }).then((response) => response.json());

    return SpotifyApiClient.authenticatedRequest(credentials, request);

  }

  static createPlayList(credentials, recommendation){
    const requestUri = url.format({protocol:'https', host:config.Spotify.apiHost, pathname:`v1/users/${credentials.user.id}/playlists`});
    const request = fetch(requestUri, {
      method: 'POST',
      body: JSON.stringify({name: recommendation.name}),
      headers: {
        'Authorization': `${credentials.tokenType} ${credentials.authToken}`,
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((playlist) => {
      if (!playlist.hasOwnProperty('error')) {
        const dataPayload = { uris: recommendation.tracks.map((track) => track.uri)};
        return fetch(playlist.tracks.href, {
          method: 'POST',
          body: JSON.stringify(dataPayload),
          headers: {
            'Authorization': `${credentials.tokenType} ${credentials.authToken}`,
            'Content-Type': 'application/json',
          }
        });
      }else{
        throw playlist;
      }
    }).then((response) => response.json());
    return SpotifyApiClient.authenticatedRequest(credentials, request);
  }
}

export default SpotifyApiClient;
