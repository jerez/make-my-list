import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

const rowStyle = {
  justifyContent: 'center',
  paddingVertical: 2,
  paddingHorizontal: 5,
  margin: 2,
  alignItems: 'center',
  borderWidth: 0.5,
  borderRadius: 5,
}

export default StyleSheet.create({
  container: {
    flex:1,
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    ...rowStyle,
    backgroundColor: config.UI.BlueGreen,
    borderColor: config.UI.Grey,
  },
  selected: {
    ...rowStyle,
    backgroundColor: config.UI.DkGrey,
    borderColor: config.UI.Green,
  },
  text: {
    flex: 1,
    color: config.UI.LtGrey,
  },
  selectedText: {
    flex: 1,
    color: config.UI.Green,
  }
});
