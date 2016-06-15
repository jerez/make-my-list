
import React, { PropTypes, Component } from 'react';
import {View, ScrollView, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class TracksView extends Component {

  static propTypes = {
    tracks: PropTypes.array.isRequired,
  };

  render() {
    const items = this.props.tracks.map((track, index) =>  (<Text key={`item-${index}`}>{track.name}</Text>));
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} automaticallyAdjustContentInsets >
            {items}
        </ScrollView>
      </View>
    );
  }
}
