import moment from 'moment';

import React, { PropTypes, Component } from 'react';
import { View, Text, Image, Modal } from 'react-native';
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

  //Preview urls are plain mp3 object not a streaming object
  _renderPreviewButton = () => {
    if (this.props.track.previewUrl) {
      return (
        <View style={{justifyContent:'center'}}>
          <Button
            style={styles.previewButton}
            onPress={() => this.setState({modalVisible: true})}>
            Preview
          </Button>
          <Modal
             animationType='slide'
             transparent={true}
             visible={this.state.modalVisible}>
             <View style={styles.modalContent}>
               <View style={{ height:200, width:300, backgroundColor:'white', borderRadius:3, overflow:'hidden', padding:10}}>
                 <Text >{this.props.track.name}</Text>
                   <Button
                    style={styles.modalButton}
                    onPress={() => this.setState({modalVisible: false})}>
                    Close
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
