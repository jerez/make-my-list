
import React, { PropTypes, Component } from 'react';
import { View, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import GenresView from 'MakeMyList/js/components/GenresView';
import ArtistsView from 'MakeMyList/js/components/ArtistsView';
import TracksView from 'MakeMyList/js/components/TracksView';

import styles from './styles';

export default class SeedScene extends Component {
  static propTypes = {
  };

  constructor(props){
    super(props)
    this.state = {selectedTab:'Genres'}
  }

  _renderTab = (key) =>{
    let child;
    switch (key) {
      case 'Genres':
        child = (<GenresView genres={this.props.genres} />);
        break;
      case 'Artists':
        child = (<ArtistsView artists={this.props.artists} />);
        break;
      case 'Tracks':
        child = (<TracksView tracks={this.props.tracks} />);
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
        {child}
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
    </TabNavigator>
   );
 }
}
