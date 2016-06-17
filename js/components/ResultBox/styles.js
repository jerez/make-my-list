import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

const buttonStyle ={
  margin: 3,
  paddingVertical:4,
  height:20,
  borderRadius:10,
  fontSize:10,
  width:80,
  color: config.UI.White,
};

export default StyleSheet.create({
  box: {
    padding: 5,
    margin: 5,
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
  deleteButton:{
    ...buttonStyle,
    backgroundColor: config.UI.Red,
  },
  saveButton:{
    ...buttonStyle,
    backgroundColor: config.UI.Green,
  },
  detailsButton:{
    ...buttonStyle,
    backgroundColor: config.UI.Blue,
  },
});
