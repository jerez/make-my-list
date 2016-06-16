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
});
