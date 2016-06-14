
import React, { PropTypes, Component } from 'react';
import {View, Text, Image } from 'react-native';
import Button from 'react-native-button';
import styles from './styles';

export default class SpotifyProfile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onLogoutClick: PropTypes.func.isRequired,
  };

  /*
    country
    display_name
    id
    images
    product
  */
  render() {
    const imageSource = { uri: this.props.user.images[0].url};
    console.log(this.props.user);
    return (
      <View style={styles.main}>
        <Text style={styles.welcome}>
          Welcome {this.props.user.display_name}!
        </Text>
        <Image
          source={imageSource}
          style={styles.picture}>
        </Image>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Button
          style={styles.button}
          onPress={this._handlePress}>
          Logout
        </Button>
      </View>
    );
  }

  _handlePress = (event) => {
    this.props.onLogoutClick();
  }
}
