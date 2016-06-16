
import React, { PropTypes, Component } from 'react';
import { View, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ItemsView from 'MakeMyList/js/components/ItemsView';

import styles from './styles';

export default class SeedScene extends Component {
  static propTypes = {
  };

  constructor(props){
    super(props)
    this.state = {selectedTab:'Genres'}
  }

  _selectItem = (item) => {
    console.log(item);
  }

  _renderTab = (key) =>{
    let items = [];
    switch (key) {
      case 'Genres':
        items = this.props.genres;
        break;
      case 'Artists':
        items = this.props.artists;
        break;
      case 'Tracks':
        items = this.props.tracks;
        break;
    }
    return (
      <TabNavigator.Item
        selected={this.state.selectedTab === key}
        title={key}
        tabStyle={styles.tabStyle}
        titleStyle={styles.tabTitleStyle}
        selectedTitleStyle={styles.selectedTabTitleStyle}
        onPress={() => this.setState({ selectedTab: key })}>
        <View style={styles.content}>
          <ItemsView items={items} tapCallback={this._selectItem} />
        </View>
      </TabNavigator.Item>
    );
  }

  render() {
   return (
     <TabNavigator
       tabBarStyle={styles.tabBarStyle}>
        {this._renderTab('Genres')}
        {this._renderTab('Artists')}
        {this._renderTab('Tracks')}
    </TabNavigator>);
  }
}
