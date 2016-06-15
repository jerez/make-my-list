import React, { PropTypes, Component } from 'react';
import { NavigatorIOS } from 'react-native';
import LandingScene from './Landing';
import SeedScene from './Seed';
import config from 'MakeMyList/js/utils/config';

export default class MainNavigator extends Component {

  static propTypes = {
  };

  render() {
    return (
      <NavigatorIOS style={{flex:1}}
        shadowHidden
        barTintColor={config.UI.Black}
        tintColor={config.UI.LtGrey}
        titleTextColor={config.UI.LtGrey}
        ref='mainNav'
        itemWrapperStyle={{flex:1, backgroundColor:config.UI.DkGrey}}
        initialRoute={{
          navigationBarHidden:true,
          component: LandingScene,
          title: 'Home',
          passProps: { startFlow: this.startFlow },
        }}
      />
    );
  }

  startFlow = () => {
    this.refs.mainNav.push({
      navigationBarHidden:false,
      title: 'Seed',
      component: SeedScene,
    })
  }

}
