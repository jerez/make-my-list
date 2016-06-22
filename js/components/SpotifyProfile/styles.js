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
    ...config.UI.styles.title,
    textAlign: 'center',
    margin: 10,
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
    borderWidth:1,
    borderColor: config.UI.colors.Red,
    color: config.UI.colors.Red,
  },
});
