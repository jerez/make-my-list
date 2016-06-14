
import React, { PropTypes, Component } from 'react';
import {View, Text, Image } from 'react-native';
import styles from './styles';

export default class SpotifyProfile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
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
    return (
      <View>
        <Image
          source={imageSource}
          style={styles.picture}>
        </Image>
      </View>
    );
  }

  _handlePress = (event) => {
    this.props.onClick();
  }
}
