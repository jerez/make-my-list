
import React, { PropTypes, Component } from 'react';
import {View, Modal } from 'react-native';
import styles from './styles';
import SpotifyButton from 'MakeMyList/js/components/SpotifyButton';
import SpotifyProfile from 'MakeMyList/js/components/SpotifyProfile';

import AuthActions from 'MakeMyList/js/flux/actions/AuthActions';
import AuthStore from 'MakeMyList/js/flux/stores/AuthStore';

export default class LandingScene extends Component {

  constructor(props){
    super(props);
    this.state = AuthStore.getState();
    console.log(this.state);
  }

  componentDidMount() {
    AuthStore.listen(this._onChange);
  }

  componentWillUnmount() {
    LocationStore.unlisten(this._onChange);
  }

  _onChange = (state) =>{
    this.setState(state);
  }

  _renderComponent = () => {
    if (this.state.user) {
      return <SpotifyProfile
        user={ this.state.user }
        onStartClick={() => {this._setModalVisible(true)}}
        onLogoutClick={ this._handleLogoutTapped }/>
    } else {
      return <SpotifyButton onClick={ this._handleConnectTapped }/>
    }
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  render() {
    // <Modal
    //   animationType='fade'
    //   visible={this.state.modalVisible}
    //   onRequestClose={() => {this._setModalVisible(false)}}>
    //   <SeedScene />
    // </Modal>

    return (
     <View style={styles.container}>
       {this._renderComponent()}
     </View>
   );
 }

 _handleConnectTapped = () => {
   AuthActions.showLogin();
 }

 _handleLogoutTapped = () => {
   AuthActions.logOut();
 }
}
