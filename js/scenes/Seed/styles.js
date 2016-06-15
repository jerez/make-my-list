import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

export default StyleSheet.create({
  content: {
    padding:20,
    paddingTop:84,
  },
  contentText: {
    color: config.UI.LtGrey,
  },
  tabBarStyle:{
    height: 44,
    backgroundColor: config.UI.DkGrey,
  },
  tabStyle:{
    flex: 1,
    height: 44,
    justifyContent: 'center',
  },
  tabTitleStyle:{
    color: config.UI.Grey,
    backgroundColor: config.UI.DkGrey,
    fontSize: 20
  },
  selectedTabTitleStyle:{
    color: config.UI.DkGrey,
    backgroundColor: config.UI.LtGrey,
    fontSize: 20,
    height: 44,
  },
});
