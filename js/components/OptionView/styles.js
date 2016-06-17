import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  container: {

  },
  box: {
    padding :10,
    margin: 10,
    borderColor: config.UI.White,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    color: config.UI.DkGrey,
    textAlign:'center',
    margin: 2
  },
  label: {
    color: config.UI.Grey,
    textAlign:'justify',
    marginBottom: 5
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  slider: {
    width:250,
  }

});
