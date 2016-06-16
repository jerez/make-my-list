
import React, { PropTypes, Component } from 'react';
import {View, TouchableHighlight, Text } from 'react-native';
import styles, {itemHighlight} from './styles';

export default class ItemsView extends Component {

  static propTypes = {
    items: PropTypes.array,
    tapCallback: PropTypes.func.isRequired,
  };

  _renderRow(item, index) {
    const rowStyle = item.selected
      ? [styles.selected, {borderColor: itemHighlight[item.type]}]
      : styles.row;
    const textStyle = item.selected
      ? [styles.selectedText, {color: itemHighlight[item.type]}]
      : styles.text;

    return (
        <TouchableHighlight key={`item-${index}`}
          onPress={ () => this.props.tapCallback(item) } underlayColor='rgba(0,0,0,0)'>
            <View style={rowStyle}>
              <Text style={textStyle}>
                {item.label}
              </Text>
            </View>
        </TouchableHighlight>
      );
  }

  render() {
    if (this.props.items) {
      return (
        <View style={styles.container}>
          <View style={styles.list} >
              {this.props.items.map((item, index) =>  this._renderRow(item, index))}
          </View>
        </View>);
    }
    return null;
  }
}
