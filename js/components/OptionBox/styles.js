import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  container: {

  },
  box: {
    padding :10,
    margin: 10,
    borderColor: config.UI.colors.Grey,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    color: config.UI.colors.Grey,
    textAlign:'center',
    margin: 2
  },
  label: {
    fontFamily: 'Montserrat-Light',
    color: config.UI.colors.Grey,
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
