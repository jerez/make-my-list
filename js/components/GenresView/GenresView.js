
import React, { PropTypes, Component } from 'react';
import {View, ScrollView, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class GenresView extends Component {

  static propTypes = {
    genres: PropTypes.array.isRequired,
  };

  render() {
    const items = this.props.genres.map((title, index) =>  (<Text key={`item-${index}`}>{title}</Text>));
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} automaticallyAdjustContentInsets >
            {items}
        </ScrollView>
      </View>
    );
  }
}
