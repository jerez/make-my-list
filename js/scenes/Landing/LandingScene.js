
import React, { PropTypes, Component } from 'react';
import {View, Modal, Text } from 'react-native';

import Button from 'react-native-button';
import SpotifyButton from 'MakeMyList/js/components/SpotifyButton';
import SpotifyProfile from 'MakeMyList/js/components/SpotifyProfile';

import styles from './styles';

import AltContainer from 'alt-container';
import AuthActions from 'MakeMyList/js/flux/actions/AuthActions';
import AuthStore from 'MakeMyList/js/flux/stores/AuthStore';

export default class LandingSceneContainer extends Component {
  render() {
    return (
      <AltContainer store={AuthStore} actions={{AuthActions: AuthActions}}>
        <LandingScene {...this.props} />
      </AltContainer>
   );
 }
}

class LandingScene extends Component {

  _renderComponent = () => {
    if (this.props.user) {
      return (
        <SpotifyProfile
          user={ this.props.user }
          onLogoutClick={ this._handleLogoutTapped }>
          <Text style={styles.instructions}>
            Some instructions here!
          </Text>
          <Button
            style={styles.startButton}
            onPress={this._navToSeed}>
            Make my list!!
          </Button>
          <Text style={styles.instructions}>
            Some other text right here!!
          </Text>
       </SpotifyProfile>);
    } else {
      return <SpotifyButton onClick={ this._handleConnectTapped }/>
    }
  }

  render() {
    return (
     <View style={styles.container}>
       {this._renderComponent()}
     </View>
   );
 }

 _navToSeed = () => {
   this.props.startFlow();
 }

 _handleConnectTapped = () => {
   this.props.AuthActions.showLogin();
 }

 _handleLogoutTapped = () => {
   this.props.AuthActions.logOut();
 }
}
