import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: config.UI.White,
  },
  instructions: {
    textAlign: 'center',
    color: config.UI.Grey,
  },
  startButton: {
    margin:20,
    paddingVertical:10,
    paddingHorizontal:50,
    height:50,
    overflow:'hidden',
    borderRadius:25,
    backgroundColor: config.UI.Green,
    fontSize: 20,
    color: config.UI.White,
  },

});
