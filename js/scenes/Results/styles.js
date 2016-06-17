import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  container: {
    flex:1,
    marginTop:64,
    marginBottom:10,
  },
  empty: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color:config.UI.Red,
  },
});
