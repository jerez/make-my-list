
import React, { PropTypes, Component } from 'react';
import {View, ListView, ScrollView, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

export default class ItemsView extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    tapCallback: PropTypes.func.isRequired,
  };

  _renderRow(item, index) {
  return (
      <TouchableHighlight key={`item-${index}`}
        onPress={ () => this.props.tapCallback(item) } underlayColor='rgba(0,0,0,0)'>
          <View style={item.selected ? styles.selected : styles.row}>
            <Text style={item.selected ? styles.selectedText : styles.text}>
              {item.label}
            </Text>
          </View>
      </TouchableHighlight>
    );
  }

  render() {
    if (this.props.items.length > 0) {
      return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.list} automaticallyAdjustContentInsets={false} >
              {this.props.items.map((item, index) =>  this._renderRow(item, index))}
          </ScrollView>
        </View>);
    }
    return null;
  }
}
