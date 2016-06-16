
import React, { PropTypes, Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
import OptionView from 'MakeMyList/js/components/OptionView';

import styles from './styles';

export default class OptionScene extends Component {

  static propTypes = {
  };

  _onStateChange = (name, enabled) => {
    console.log(name, enabled);
  }

  _onValueChange = (name, value) => {
    console.log(name, value);
  }

  render() {
    return (
      <View style={styles.container}>
        <OptionView
          name={'test'}
          label={'test'}
          enabled={false}
          value={0}
          onStateChange={this._onStateChange}
          onValueChange={this._onValueChange}
        />
      </View>
    );
  }
}
