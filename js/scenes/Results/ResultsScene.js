
import React, { PropTypes, Component } from 'react';
import { View, ScrollView, Text, AlertIOS } from 'react-native';
import Button from 'react-native-button';
import ResultBox from 'MakeMyList/js/components/ResultBox';
import ListScene from './ListScene';

import styles from './styles';


export default class ResultsScene extends Component {

  _handleOnSaveClick = (item) => {

    AlertIOS.prompt(
      'Name your list',
      'Type your list name to save it' ,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: name => {
          if (name.length) {
            item.name = name;
            this.props.ContentActions.createPlaylist(item);
            AlertIOS.alert(
             'Congrats!',
             'Your list was created!',
             [
               {text: 'OK', onPress: () => this.props.ContentActions.deleteResult(item)}
             ]
            );
          }
        }},
      ],
      'plain-text',
      item.name
    );
  }

  _handleOnDeleteClick = (item) => {
    this.props.ContentActions.deleteResult(item);
  }

  _handleOnDetailsClick = (item) => {
    this.props.navigator.push({
      navigationBarHidden:false,
      title: 'Track List',
      component: ListScene,
      passProps: {
        tracks: item.tracks,
      },
    })
  }

  _renderContent = () => {
    return this.props.recommendations.map((item) =>
      <ResultBox key={item.name} item={item}
        onDeleteClick={this._handleOnDeleteClick}
        onSaveClick={this._handleOnSaveClick}
        onDetailsClick={this._handleOnDetailsClick}/>);
  }

  render() {
    if (this.props.recommendations && this.props.recommendations.length) {
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
            You don't have any recommendations :(
          </Text>
        </View>);
    }
  }
}
