
import React, { PropTypes, Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Button from 'react-native-button';
import OptionView from 'MakeMyList/js/components/OptionView';

import styles from './styles';

export default class OptionScene extends Component {

  _handleOptionChange = (option) => {
    const index = this.optionsCache.findIndex((cached) => cached.name === option.name);
    this.optionsCache[index] = option;
  }

  _handleNext = () =>{
    this.props.OptionsActions.setOptions(this.optionsCache);
    this.props.next();
  }

  constructor(props){
    super(props);
    this.optionsCache = this.props.options;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tweek your recommendations</Text>
        <Text style={styles.instructions}>Enable those options that you want to use to improve your results</Text>
        <ScrollView automaticallyAdjustContentInsets={false} >
          {this.optionsCache.map((option, index) =>
            <OptionView key={index}
              option={option}
              onChange={this._handleOptionChange} />
          )}
        </ScrollView>
        <Button
          style={styles.nextButton}
          onPress={this._handleNext}>
          Next
        </Button>
      </View>
    );
  }
}
