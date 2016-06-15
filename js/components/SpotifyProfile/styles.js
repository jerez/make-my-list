import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  main: {
    flex:1,
  },
  contentWrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: config.UI.DkGrey,
  },
  content: {
    paddingVertical:10,
    paddingHorizontal:20,
  },
  picture: {
    height: 100,
    borderRadius: 50,
    width: 100
  },
  LogoutButton: {
    paddingVertical:10,
    margin:5,
    width:340,
    height:50,
    overflow:'hidden',
    borderRadius:25,
    backgroundColor: config.UI.DkGrey,
    fontSize: 20,
    color: config.UI.Orange,
  },
});
