
import React, { PropTypes, Component } from 'react';
import {View, Text, Image } from 'react-native';
import Button from 'react-native-button';
import styles from './styles';

export default class SpotifyProfile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onLogoutClick: PropTypes.func.isRequired,
  };

  _renderChildren() {
    if (this.props.children) {
      return <View style={styles.content}>{this.props.children}</View>;
    }
    return null;
  }

  render() {
    const imageSource = { uri: this.props.user.images[0].url};
    return (
      <View style={styles.main}>
        <View style={styles.contentWrapper}>
          <Text style={styles.welcome}>
            Welcome {this.props.user.display_name}!
          </Text>
          <Image
            source={imageSource}
            style={styles.picture}>
          </Image>
          {this._renderChildren()}
        </View>
        <Button
          style={styles.LogoutButton}
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
