import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';


export default StyleSheet.create({
  box: {
    padding: 5,
    marginHorizontal: 2.5,
    marginBottom: 2.5,
    borderColor: config.UI.Grey,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image:{
    height:64,
    width:64,
    borderRadius: 5,
  },
  text:{
    textAlign:'justify',
    paddingBottom:5,
    paddingHorizontal:5,
  },
  buttonRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  previewButton:{
    margin: 3,
    paddingVertical:8,
    paddingHorizontal:20,
    height:30,
    borderRadius:15,
    borderWidth:2,
    borderColor: config.UI.Green,
    fontSize:12,
    color: config.UI.Green,
    backgroundColor: config.UI.DkGrey,
    overflow: 'hidden',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
