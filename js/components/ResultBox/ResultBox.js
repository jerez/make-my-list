import moment from 'moment';

import React, { PropTypes, Component } from 'react';
import { View, Text, Image } from 'react-native';
import Button from 'react-native-button';
import styles, {itemHighlight} from './styles';

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
    onSaveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onDetailsClick: PropTypes.func.isRequired,
  };

  _handleOnSaveClick = () => {
    this.props.onSaveClick(this.props.item);
  }

  _handleOnDeleteClick = () => {
    this.props.onDeleteClick(this.props.item);
  }

  _handleOnDetailsClick = () => {
    this.props.onDetailsClick(this.props.item);
  }

  render() {
    const item = this.props.item;
    const imageUrl = item.tracks.find((track) => track.hasOwnProperty('image')).image;
    const createdText =  `Created: ${moment(item.created).format('MMMM Do YYYY, h:mm:ss a')}`;
    const artists = item.tracks.map((track) => track.artists)
      .reduce((first, second) => first.concat(second), [])
      .filter((elem, index, self) => index == self.indexOf(elem));
    const artistsText = `Artists: ${artists.slice(0, 3).join(', ')}...`;

    return (
      <View
        style={styles.box}>
        <Image source={{ uri: imageUrl }}
          style={styles.image}/>
        <View style={{flex:1}}>
          <Text style={styles.text}>{createdText}</Text>
          <Text style={styles.text}>{artistsText}</Text>
          <View style={styles.buttonRow}>
            <Button style={styles.deleteButton}
              onPress={this._handleOnDeleteClick}>
              Delete
            </Button>
            <Button style={styles.saveButton}
              onPress={this._handleOnSaveClick}>
              Save
            </Button>
            <Button style={styles.detailsButton}
              onPress={this._handleOnDetailsClick}>
              Details
            </Button>
          </View>
        </View>
      </View>);
  }
}
