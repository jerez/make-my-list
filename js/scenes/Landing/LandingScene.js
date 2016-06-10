
import React, { PropTypes, Component } from 'react';
import {View, Text, Image } from 'react-native';
import styles from './styles';
import SpotifyButton from '../../components/SpotifyButton';

import Alt from 'alt'
const alt = new Alt();

export default class LandingScreen extends Component {

  static propTypes = {
    connectHelper: PropTypes.shape({
      showLogin: PropTypes.func.isRequired,
    }).isRequired
  };

 render() {
   console.log(this.props);
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
       <SpotifyButton onClick = { this._handleConnectTapped }/>
     </View>
   );
 }

 _handleConnectTapped = () => {
   this.props.connectHelper.showLogin();
 }
}
