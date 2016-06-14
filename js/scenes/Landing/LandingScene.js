
import React, { PropTypes, Component } from 'react';
import {View, Text, Image } from 'react-native';
import styles from './styles';
import SpotifyButton from '../../components/SpotifyButton';
import SpotifyProfile from '../../components/SpotifyProfile';

export default class LandingScene extends Component {

  static propTypes = {
    connectHelper: PropTypes.shape({
      showLogin: PropTypes.func.isRequired,
    }).isRequired,
  };

  _renderComponent = () => {
    if (this.props.user) {
      return <SpotifyProfile user={ this.props.user } onLogoutClick={ this._handleLogoutTapped }/>
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

 _handleConnectTapped = () => {
   this.props.connectHelper.showLogin();
 }

 _handleLogoutTapped = () => {
   this.props.actions.logOut();
 }
}
