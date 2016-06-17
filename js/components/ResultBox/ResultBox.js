import moment from 'moment';

import React, { PropTypes, Component } from 'react';
import { View, Text, Image } from 'react-native';
import Button from 'react-native-button';
import styles, {itemHighlight} from './styles';
import config from 'MakeMyList/js/utils/config';

export default class ResultBox extends Component {

  static propTypes = {
    item: React.PropTypes.shape({
      name: PropTypes.string.isRequired,
      created: PropTypes.number.isRequired,
      tracks: PropTypes.arrayOf(
        React.PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          previewUrl: PropTypes.string,
          album: PropTypes.string,
          artists: PropTypes.array,
        })
      ).isRequired,
    }).isRequired,
  };


  render() {
    const item = this.props.item;
    const imageUrl = item.tracks.find((track) => track.hasOwnProperty('image')).image;
    const createdText =  `Created: ${moment(item.created).format('MMMM Do YYYY, h:mm:ss a')}`;
    const artists = item.tracks.map((track) => track.artists)
      .reduce((first, second) => first.concat(second), [])
      .filter((elem, index, self) => index == self.indexOf(elem));
    const artistsText = `Artists: ${artists.slice(0, 3).join(', ')}...`;

    const buttonStyle ={
      margin: 3,
      paddingVertical:4,
      height:20,
      borderRadius:10,
      fontSize:10,
      width:80,
      color: config.UI.White,
    };

    return (
      <View
        style={{
          padding: 5,
          margin: 5,
          borderColor: config.UI.Grey,
          borderWidth: 1,
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image source={{ uri: imageUrl }}
          style={{
            height:64,
            width:64,
            borderRadius: 5,
          }}/>
        <View style={{flex:1}}>
          <Text style={{ textAlign:'justify', paddingBottom:5, paddingHorizontal:5  }}>{createdText}</Text>
          <Text style={{ textAlign:'justify', paddingBottom:5, paddingHorizontal:5  }}>{artistsText}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button
              style={{
                ...buttonStyle,
                backgroundColor: config.UI.Red,
              }}
              onPress={this._handleNext}>
              Delete
            </Button>
            <Button
              style={{
                ...buttonStyle,
                backgroundColor: config.UI.Green,
              }}
              onPress={this._handleNext}>
              Save
            </Button>
            <Button
              style={{
                ...buttonStyle,
                backgroundColor: config.UI.Blue,
              }}
              onPress={this._handleNext}>
              Details
            </Button>
          </View>
        </View>
      </View>);
  }

}
