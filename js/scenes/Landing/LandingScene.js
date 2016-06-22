
import React, { PropTypes, Component } from 'react';
import {View, Modal, Image, Text } from 'react-native';

import Button from 'react-native-button';
import SpotifyButton from 'MakeMyList/js/components/SpotifyButton';
import SpotifyProfile from 'MakeMyList/js/components/SpotifyProfile';

import styles from './styles';

export default  class LandingScene extends Component {

  _renderResultsButton = () => {
    if(this.props.recommendations && this.props.recommendations.length){
      return(<Button
        style={styles.startButton}
        onPress={this.props.showResults}>
         My recommendations!!
      </Button>);
    }
  }

  _renderComponent = () => {
    if (this.props.user) {
      return (
        <SpotifyProfile
          user={ this.props.user }
          onLogoutClick={  this.props.AuthActions.logout }>
          <Text style={styles.instructions}>
            Tap on 'Make my list' to start selecting your preferences!
          </Text>
          <Button
            style={styles.startButton}
            onPress={this.props.start}>
            Make my list!!
          </Button>
          {this._renderResultsButton()}
       </SpotifyProfile>);
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to MakeMyList!
          </Text>
          <Text style={styles.instructions}>
            To start making your custom list please connect with your Spotify account!
          </Text>
          <SpotifyButton onClick={ this.props.AuthActions.showLogin }/>
        </View>
      );
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
