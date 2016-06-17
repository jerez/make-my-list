
import React, { PropTypes, Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Button from 'react-native-button';
import ResultBox from 'MakeMyList/js/components/ResultBox';

import styles from './styles';


export default class ResultsScene extends Component {



  _renderContent = () => {
    if (this.props.recommendations) {
      return this.props.recommendations.map((item) =>
      <ResultBox key={item.name} item={item}/>);
    } else {
      return (
        <Text >
          You don't have any recommendations :(
        </Text>
      );
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView automaticallyAdjustContentInsets={false} >
          {this._renderContent()}
        </ScrollView>
      </View>
    );
  }
}
