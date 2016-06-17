
import React, { PropTypes, Component } from 'react';
import { ScrollView, Text } from 'react-native';
import Button from 'react-native-button';
import OptionView from 'MakeMyList/js/components/OptionView';

import styles from './styles';

export default class OptionScene extends Component {

  _handleOptionChange = (option) => {
    const index = this.optionsCache.findIndex((cached) => cached.name === option.name);
    this.optionsCache[index] = option;
    console.log(this.optionsCache);
  }

  constructor(props){
    super(props);
    this.optionsCache =  this.props.options;
    console.log(this.optionsCache);

  }

  render() {
    return (
      <ScrollView style={styles.container} automaticallyAdjustContentInsets={false} >
        {this.optionsCache.map((option, index) =>
          <OptionView key={index}
            option={option}
            onChange={this._handleOptionChange} />
        )}
      </ScrollView>
    );
  }
}
