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
    ...config.UI.styles.title,
    textAlign: 'center',
    padding: 5,
  },
  instructions:{
    ...config.UI.styles.text,
    textAlign: 'center',
    padding: 5,
  },
  box:{
    padding:10,
    marginVertical:5,
    borderColor: config.UI.colors.Blue,
    borderWidth: 1,
    borderRadius: 5,
    // backgroundColor:  config.UI.colors.Grey,
  },
  resultsTitle:{
    ...config.UI.styles.title,
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
