import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  container: {
    flex:1,
    marginTop:66,
  },
  empty: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color:config.UI.colors.Red,
  },
});
