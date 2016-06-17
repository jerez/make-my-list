
import React, { PropTypes, Component } from 'react';
import { View, Text, Switch, Slider } from 'react-native';

import config from 'MakeMyList/js/utils/config';
import styles from './styles';

export default class OptionView extends Component {

  static propTypes = {
    option: React.PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      enabled: PropTypes.bool.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  _onStateChange = (enabled) => {
    this.state.option.enabled = enabled;
    this.setState({ option: this.state.option });
    this.props.onChange(this.state.option );
  }

  _onValueChange = (value) => {
    this.state.option.value = value;
    this.setState({ option: this.state.option });
    this.props.onChange(this.state.option);
  }
  constructor(props){
    super(props)
    this.state = { option: this.props.option };
  }
  render() {
    const option = this.state.option;
    const label = `${option.name.charAt(0).toUpperCase()}${option.name.slice(1)} [${Math.round(option.value*100)}]`;
    const boxStyle = option.enabled ? [styles.box, {borderColor:config.UI.Blue}] : styles.box;
    const titleStyle = option.enabled ? [styles.title, {color:config.UI.Blue}] : styles.title;
    return (
      <View style={styles.container}>
        <View style={boxStyle}>
          <Text style={titleStyle}>{label}</Text>
          <Text style={styles.label}>{option.description}</Text>
          <View style={styles.group}>
            <Switch
              onValueChange={ this._onStateChange }
              value={option.enabled}
              onTintColor={config.UI.Blue}
              tintColor={config.UI.Grey}/>
            <Slider style={styles.slider}
              step={0.05}
              value={option.value}
              disabled={!option.enabled}
              minimumTrackTintColor={config.UI.Blue}
              onValueChange={ this._onValueChange } />
          </View>
        </View>
      </View>
    );
  }
}
