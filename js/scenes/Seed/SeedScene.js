
import React, { PropTypes, Component } from 'react';
import { View, ScrollView, Text, SegmentedControlIOS } from 'react-native';

import Button from 'react-native-button';
import ItemsView from 'MakeMyList/js/components/ItemsView';

import styles from './styles';
import config from 'MakeMyList/js/utils/config';

export default class SeedScene extends Component {
  static propTypes = {
  };

  constructor(props){
    super(props)
    this.state = { selectedIndex:0 };
  }

  _renderSelectedBox = () => {
    if(this.props.selectedItems.length > 0){
      return (
        <View style={styles.box}>
          <Text style={styles.resultsTitle}>Check your choices and continue!</Text>
          <ItemsView items={this.props.selectedItems} tapCallback={this.props.ContentActions.selectItem} />
          <Button
            style={styles.nextButton}
            onPress={this._handlePress}>
            Next
          </Button>
        </View>);
    }
  }

  render() {
    const items = this.state.selectedIndex === 0 ? this.props.genres
      : this.state.selectedIndex === 1 ? this.props.artists
      : this.props.tracks;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Seed your List!!</Text>
        <Text style={styles.instructions}>Choose up to five items between categories as recomendations to your new list</Text>
        <SegmentedControlIOS
          values={['Genres', 'Artists', 'Tracks']}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => this.setState({selectedIndex:event.nativeEvent.selectedSegmentIndex})}
          tintColor={config.UI.DkGrey} />
        <ScrollView style={styles.box} automaticallyAdjustContentInsets={false}>
          <ItemsView items={items} tapCallback={this.props.ContentActions.selectItem}/>
        </ScrollView>
        {this._renderSelectedBox()}
      </View>);
  }
}
