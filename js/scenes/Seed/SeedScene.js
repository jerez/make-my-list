
import React, { PropTypes, Component } from 'react';
import { View, ScrollView, Text, SegmentedControlIOS, AlertIOS } from 'react-native';

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

  _selectItem = (item) => {
    if (!item.selected && (this.props.selectedItems && this.props.selectedItems.length === 5)) {
      AlertIOS.alert(
       'Your seed-box is full!',
       'Just up to 5 elements are allowed.\n\nTip: tap again on selected ones to remove it!'
      );
    } else {
      this.props.ContentActions.selectItem(item);
    }
  }

  _renderSelectedBox = () => {
    if(this.props.selectedItems && this.props.selectedItems.length){
      return (
        <View style={styles.box}>
          <Text style={styles.resultsTitle}>Check your choices and continue!</Text>
          <ItemsView items={this.props.selectedItems} tapCallback={this.props.ContentActions.selectItem} />
          <Button
            style={styles.nextButton}
            onPress={this.props.ContentActions.getRecommendations}>
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
          <ItemsView items={items} tapCallback={this._selectItem}/>
        </ScrollView>
        {this._renderSelectedBox()}
      </View>);
  }
}
