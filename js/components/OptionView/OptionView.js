
import React, { PropTypes, Component } from 'react';
import { View, Text, Switch, Slider } from 'react-native';

import config from 'MakeMyList/js/utils/config';
import styles from './styles';

export default class OptionView extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    enabled: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
    onStateChange: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired,
  };

  _onStateChange = (enabled) => {
    this.setState({enabled: enabled});
    this.props.onStateChange(this.props.name, enabled);
  }

  _onValueChange = (value) => {
    this.setState({value: value});
    this.props.onValueChange(this.props.name, value);
  }

  constructor(props){
    super(props)
    this.state = { enabled: props.enabled, value: props.value };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.label}>{this.props.label}</Text>
          <View style={styles.group}>
            <Switch
              onValueChange={ this._onStateChange }
              value={this.state.enabled}
              onTintColor={config.UI.Green}
              tintColor={config.UI.DkGrey}/>
            <Slider style={styles.slider}
              disabled={!this.state.enabled}
              minimumTrackTintColor={config.UI.Green}
              onValueChange={ this._onValueChange } />
          </View>
        </View>
      </View>
    );
  }
}
