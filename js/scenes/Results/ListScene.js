
import React, { PropTypes, Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Button from 'react-native-button';
import TrackBox from 'MakeMyList/js/components/TrackBox';

import styles from './styles';

export default class ResultsScene extends Component {

  static propTypes = {
    tracks: PropTypes.arrayOf(
      React.PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        previewUrl: PropTypes.string,
        album: PropTypes.string,
        artists: PropTypes.array,
      })
    ).isRequired,
  };

  _renderContent = () => {
      return this.props.tracks.map((track) =>
        <TrackBox key={track.id} track={track} />);
  }

  render() {
    if (this.props.tracks && this.props.tracks.length) {
      return(
        <View style={styles.container}>
        <ScrollView automaticallyAdjustContentInsets={false} >
          {this._renderContent()}
        </ScrollView>
      </View>);
    } else {
      return (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>
            Oops, this list is empty! :(
          </Text>
        </View>);
    }
  }
}
