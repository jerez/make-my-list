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
    color: config.UI.colors.DkGrey,
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
  },
  instructions:{
    color: config.UI.colors.Grey,
    textAlign: 'center',
    padding: 5,
  },
  box:{
    padding:10,
    marginVertical:5,
    borderColor: config.UI.colors.DKGrey,
    borderWidth: 1,
    borderRadius: 5,
  },
  resultsTitle:{
    color: config.UI.colors.DkGrey,
    textAlign: 'center',
    marginBottom:5,
  },
  nextButton: {
    margin: 5,
    paddingVertical:5,
    height:30,
    overflow:'hidden',
    borderRadius:15,
    borderColor: config.UI.colors.Blue,
    borderWidth: 1,
    color: config.UI.colors.Blue,
  },
});
