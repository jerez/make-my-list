
import React, { PropTypes, Component } from 'react';
import {View, Text, Image } from 'react-native';
import styles from './styles';
import SpotifyButton from '../../components/SpotifyButton';
import SpotifyProfile from '../../components/SpotifyProfile';

export default class LandingScreen extends Component {

  static propTypes = {
    connectHelper: PropTypes.shape({
      showLogin: PropTypes.func.isRequired,
    }).isRequired
  };

_renderComponent = () => {
  if (this.props.user) {
    return <SpotifyProfile user = { this.props.user }/>
  } else {
    return <SpotifyButton onClick = { this._handleConnectTapped }/>
  }
}

 render() {
   return (
     <View style={styles.container}>
       <Text style={styles.welcome}>
         Welcome to React Native!
       </Text>
       <Text style={styles.instructions}>
         To get started, edit index.ios.js
       </Text>
       <Text style={styles.instructions}>
         Press Cmd+R to reload,{'\n'}
         Cmd+D or shake for dev menu
       </Text>
       {this._renderComponent()}
     </View>
   );
 }

 _handleConnectTapped = () => {
   this.props.connectHelper.showLogin();
 }
}
