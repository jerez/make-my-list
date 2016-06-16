import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: config.UI.Grey,
  },
  startButton: {
    height:50,
    width:300,
    margin:20,
    paddingVertical:10,
    paddingHorizontal:50,
    borderRadius:25,
    fontSize: 20,
    borderColor: config.UI.Blue,
    borderWidth: 1,
    color: config.UI.Blue,
  },

});
