
import React, { PropTypes, Component } from 'react';
import {View, Text, Image } from 'react-native';
import styles from './styles';

export default class SeedScene extends Component {

  static propTypes = {
  };

 render() {
  //  return (
  //    <NavigatorIOS
  //      initialRoute={{
  //        title: 'Home',
  //        component: Landing,
  //        passProps: { connectHelper: this.connectHelper },
  //      }} />
  //  );
   return (
     <View >
      <Text style={styles.welcome}>
        some text
      </Text>
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
