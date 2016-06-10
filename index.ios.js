/**
 * Make My list
 */

import React, { Component } from 'react';
import { AppRegistry, Linking } from 'react-native';
import Landing from './js/scenes/Landing';
import AltContainer from 'alt-container';

import AuthActions from './js/flux/actions/AuthActions';
import AuthStore from './js/flux/stores/AuthStore';
import SpotifyConnect from './js/utils/SpotifyConnect';

class MakeMyList extends Component {

  constructor(props){
    super(props);
    this.connectHelper = new SpotifyConnect();
  }

  componentDidMount() {
    Linking.addEventListener('url', this._handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  _handleOpenURL = (event) => {
    this.connectHelper.isConnectRedirection(event.url)
    .then((redirectUri) => {
      this.connectHelper.parseRedirection(redirectUri)
      .then((code) => {
        AuthActions.login(code);
      })
      .catch((error) => {
        alert(error === 'access_denied' ? 'You should connect with spotify your account!' : `Something went wrong!\n ${error}`)
      });
    })
    .catch((error) => { alert(error) });
  }
  render() {
    return (
      <AltContainer actions={ { actions:AuthActions} } store={AuthStore} >
        <Landing connectHelper={ this.connectHelper }/>
      </AltContainer>);
  }
}

AppRegistry.registerComponent('MakeMyList', () => MakeMyList);
