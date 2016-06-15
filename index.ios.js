/**
 * Make My list
 */

import React, { Component } from 'react';
import { AppRegistry, Linking } from 'react-native';
import Landing from './js/scenes/Landing';
import UrlHandler from './js/utils/UrlHandler';

class MakeMyList extends Component {

  componentDidMount() {
    Linking.addEventListener('url', this._handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  _handleOpenURL = (event) => {
    UrlHandler.handleOpenURL(event.url);
  }

  render() {
    return (<Landing />);
  }
}

AppRegistry.registerComponent('MakeMyList', () => MakeMyList);
