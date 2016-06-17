import moment from 'moment';

import React, { PropTypes, Component } from 'react';
import { View, Text, Image } from 'react-native';
import Button from 'react-native-button';
import styles, {itemHighlight} from './styles';

export default class TrackBox extends Component {

  static propTypes = {
    track: React.PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      previewUrl: PropTypes.string,
      album: PropTypes.string,
      artists: PropTypes.array,
    }).isRequired,
  };

  _renderPreviewButton = () => {
    if (this.props.track.previewUrl) {
      return (
        <Button containerStyle={{justifyContent:'center'}}
          style={styles.previewButton}
          onPress={this._handleOnDetailsClick}>
          Preview
        </Button>
      );
    }
  }

  render() {
    return (
      <View
        style={styles.box}>
        <Image style={styles.image} source={{ uri: this.props.track.image }}/>
        <View style={{flex:1}}>
          <Text style={styles.text}>{this.props.track.name}</Text>
          <Text style={styles.text}>{this.props.track.artists.join(', ')}</Text>
        </View>
        {this._renderPreviewButton()}
      </View>);
  }
}
