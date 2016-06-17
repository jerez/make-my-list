import moment from 'moment';

import React, { PropTypes, Component } from 'react';
import { View, Text, Image, Modal, NativeModules, NativeAppEventEmitter } from 'react-native';
import Button from 'react-native-button';
import styles, {itemHighlight} from './styles';


export default class TrackBox extends Component {

  static propTypes = {
    track: React.PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      previewUrl: PropTypes.string,
      album: PropTypes.string,
      artists: PropTypes.array,
    }).isRequired,
  };

  constructor(props){
    super(props);
    this.state = {modalVisible: false};
  }

  componentDidMount(){
    if (this.props.track.previewUrl) {
      this.audio = NativeModules.RNAudioPlayerURL;
      this.endedListener = NativeAppEventEmitter.addListener('AudioEnded', (trigger) => this._stopPreview() );
    }
  }

  componentWillUnmount(){
    if (this.audio) {
      this.audio.pause();
      this.endedListener.remove();
      this.audio = null;
    }
  }

  _previewTrack = () => {
    if (this.audio) {
      this.audio.initWithURL(this.props.track.previewUrl);
      this.setState({modalVisible: true});
      this.audio.play();
    }
  }

  _stopPreview = () => {
    if (this.audio) {
      this.audio.pause();
      this.setState({modalVisible: false});
    }
  }

  _renderPreviewButton = () => {
    if (this.props.track.previewUrl) {
      return (
        <View style={{justifyContent:'center'}}>
          <Button
            style={styles.previewButton}
            onPress={this._previewTrack}>
            Preview
          </Button>
          <Modal
             animationType='fade'
             transparent={true}
             visible={this.state.modalVisible}>
             <View style={styles.modalContent}>
               <View style={styles.modalBox}>
                 <Text style={styles.modalTitle}>{this.props.track.name}</Text>
                   <Button
                    style={styles.modalButton}
                    onPress={this._stopPreview}>
                    Stop preview
                  </Button>
                </View>
             </View>
          </Modal>
        </View>
      );
    }
  }

  render() {
    return (
      <View
        style={styles.box}>
        <Image style={styles.image} source={{ uri: this.props.track.image }}/>
        <View style={{flex:1}}>
          <Text style={styles.text}>{this.props.track.name}</Text>
          <Text style={styles.text}>{this.props.track.artists.join(', ')}</Text>
        </View>
        {this._renderPreviewButton()}
      </View>);
  }
}
