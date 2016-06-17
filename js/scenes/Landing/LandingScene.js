
import React, { PropTypes, Component } from 'react';
import {View, Modal, Text } from 'react-native';

import Button from 'react-native-button';
import SpotifyButton from 'MakeMyList/js/components/SpotifyButton';
import SpotifyProfile from 'MakeMyList/js/components/SpotifyProfile';

import styles from './styles';

export default  class LandingScene extends Component {

  _renderResultsButton = () => {
    if(this.props.recommendations){
      return(<Button
        style={styles.startButton}
        onPress={this.props.showResults}>
         My recommendations!!
      </Button>);
    }
  }

  _renderComponent = () => {
    if (this.props.user) {
      console.log(this.props);

      return (
        <SpotifyProfile
          user={ this.props.user }
          onLogoutClick={  this.props.AuthActions.logout }>
          <Text style={styles.instructions}>
            Some instructions here!
          </Text>
          <Button
            style={styles.startButton}
            onPress={this.props.start}>
            Make my list!!
          </Button>
          {this._renderResultsButton()}
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
