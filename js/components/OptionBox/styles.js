import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  container: {

  },
  box: {
    padding :10,
    margin: 10,
    borderColor: config.UI.colors.White,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    ...config.UI.styles.title,
    textAlign:'center',
    margin: 2
  },
  label: {
    ...config.UI.styles.text,
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
