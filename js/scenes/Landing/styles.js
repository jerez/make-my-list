import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 75,
    height: 75
  },
  welcome: {
    ...config.UI.styles.title,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: config.UI.colors.LtGrey,
    paddingHorizontal:20,
  },
  startButton: {
    height:50,
    width:300,
    margin:10,
    paddingVertical:12,
    paddingHorizontal:50,
    borderRadius:25,
    fontSize: 18,
    borderColor: config.UI.colors.Blue,
    borderWidth: 1,
    color: config.UI.colors.Blue,
  },

});
