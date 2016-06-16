import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  main: {
    flex:1,
    alignItems: 'center',
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
    paddingVertical:5,
    margin:20,
    width:320,
    height:30,
    overflow:'hidden',
    borderRadius:15,
    backgroundColor: config.UI.DkGrey,
    color: config.UI.Orange,
  },
});
