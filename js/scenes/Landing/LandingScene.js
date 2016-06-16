
import React, { PropTypes, Component } from 'react';
import {View, Modal, Text } from 'react-native';

import Button from 'react-native-button';
import SpotifyButton from 'MakeMyList/js/components/SpotifyButton';
import SpotifyProfile from 'MakeMyList/js/components/SpotifyProfile';

import styles from './styles';

export default  class LandingScene extends Component {

  _renderComponent = () => {
    if (this.props.user) {
      return (
        <SpotifyProfile
          user={ this.props.user }
          onLogoutClick={  this.props.AuthActions.logout }>
          <Text style={styles.instructions}>
            Some instructions here!
          </Text>
          <Button
            style={styles.startButton}
            onPress={this.props.next}>
            Make my list!!
          </Button>
          <Text style={styles.instructions}>
            Some other text right here!!
          </Text>
       </SpotifyProfile>);
    } else {
      return <SpotifyButton onClick={ this.props.AuthActions.showLogin }/>
    }
  }

  render() {
    return (
     <View style={styles.container}>
       {this._renderComponent()}
     </View>
   );
 }
}
