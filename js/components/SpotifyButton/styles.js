import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  container: {
    marginTop:20,
    paddingVertical:10,
    paddingHorizontal:25,
    height:50,
    overflow:'hidden',
    borderRadius:25,
    backgroundColor: config.UI.colors.Black,
  },
  default: {
    fontSize: 20,
    color: config.UI.colors.Green,
  },
  logo: {
    flex: 1,
    width:160,
  },
});
