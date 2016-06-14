
import React, { PropTypes, Component } from 'react';
import Button from 'react-native-button';
import {View, Text, Image } from 'react-native';
import styles from './styles';

export default class SpotifyButton extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.main}>
        <Text>
          CONNECT TO:
        </Text>
        <Button containerStyle={styles.container}
          style={styles.default}
          onPress={this._handlePress}>
          <Image
            source={require('./Spotify_Logo_RGB_Green.png')}
            style={styles.logo}
            resizeMode='contain'>
          </Image>
        </Button>
      </View>
    );
  }

  _handlePress = (event) => {
    this.props.onClick();
  }
}
