import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

button = {
  margin: 3,
  paddingVertical:8,
  paddingHorizontal:20,
  height:30,
  borderRadius:15,
  borderWidth:2,
  fontSize:12,
  overflow: 'hidden',
  backgroundColor: config.UI.DkGrey,
};

export default StyleSheet.create({
  box: {
    padding: 5,
    marginHorizontal: 2.5,
    marginBottom: 2.5,
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
    ...config.UI.styles.text,
    textAlign:'justify',
    paddingBottom:5,
    paddingHorizontal:5,
  },
  buttonRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  previewButton:{
    ...button,
    margin: 3,
    borderColor: config.UI.colors.Green,
    color: config.UI.colors.Green,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(38,38,38,0.3)',
  },
  modalBox:{
    backgroundColor: config.UI.colors.DkGrey,
    height:80,
    width:300,
    borderRadius:3,
    overflow:'hidden',
    padding:10
  },
  modalTitle:{
    ...config.UI.styles.title,
    textAlign:'center',
    color: config.UI.colors.Green,
  },
  modalButton:{
    ...button,
    margin:10,
    borderColor: config.UI.colors.Orange,
    color: config.UI.colors.Orange,
  }
});
