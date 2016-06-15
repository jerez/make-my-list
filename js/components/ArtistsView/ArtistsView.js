
import React, { PropTypes, Component } from 'react';
import {View, ScrollView, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class Artists extends Component {

  static propTypes = {
    artists: PropTypes.array.isRequired,
  };

  render() {
    const items = this.props.artists.map((title, index) =>  (<Text key={`item-${index}`}>{title}</Text>));
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} automaticallyAdjustContentInsets >
            {items}
        </ScrollView>
      </View>
    );
  }
}
