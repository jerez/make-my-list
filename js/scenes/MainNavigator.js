import React, { PropTypes, Component } from 'react';
import { View, NavigatorIOS, StatusBar } from 'react-native';

import config from 'MakeMyList/js/utils/config';

import LandingScene from './Landing';
import SeedScene from './Seed';

import AltContainer from 'alt-container';
import ContentActions from 'MakeMyList/js/flux/actions/ContentActions';
import ContentStore from 'MakeMyList/js/flux/stores/ContentStore';
import AuthActions from 'MakeMyList/js/flux/actions/AuthActions';
import AuthStore from 'MakeMyList/js/flux/stores/AuthStore';


class LandingSceneContainer extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle='default'/>
        <AltContainer store={AuthStore} actions={{AuthActions: AuthActions}}>
          <LandingScene {...this.props} />
        </AltContainer>
      </View>
   );
 }
}

class ContentSceneContainer extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle='light-content'/>
        <AltContainer store={ContentStore} actions={{ContentActions: ContentActions}}>
          <SeedScene {...this.props} />
        </AltContainer>
      </View>
   );
 }
}

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
        itemWrapperStyle={{flex:1, backgroundColor:config.UI.LtGrey}}
        initialRoute={{
          navigationBarHidden:true,
          component: LandingSceneContainer,
          title: 'Home',
          passProps: { startFlow: this.startFlow },
        }}
      />
    );
  }

  startFlow = () => {
    ContentActions.fetchSeeds();
    this.refs.mainNav.push({
      navigationBarHidden:false,
      title: 'Seed',
      component: ContentSceneContainer,
    })
  }
}
