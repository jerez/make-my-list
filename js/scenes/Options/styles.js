import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  container: {
    flex:1,
    marginTop:64,
    marginBottom:10,
    marginHorizontal:10,
  },
  title:{
    color: config.UI.DkGrey,
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
  },
  instructions:{
    color: config.UI.Grey,
    textAlign: 'center',
    padding: 5,
  },
  nextButton: {
    margin: 5,
    paddingVertical:5,
    height:30,
    overflow:'hidden',
    borderRadius:15,
    borderColor: config.UI.Blue,
    borderWidth: 1,
    color: config.UI.Blue,
  },
});
