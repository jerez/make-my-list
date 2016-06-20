import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: config.UI.DkGrey,
  },
  instructions: {
    textAlign: 'center',
    color: config.UI.Grey,
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
    borderColor: config.UI.Blue,
    borderWidth: 1,
    color: config.UI.Blue,
  },

});
