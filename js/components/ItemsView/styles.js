import { StyleSheet } from 'react-native'
import config from 'MakeMyList/js/utils/config';

const rowStyle = {
  justifyContent: 'center',
  paddingVertical: 2,
  paddingHorizontal: 5,
  margin: 2,
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: 5,
}

export const itemHighlight = {
  genre: config.UI.colors.Yellow,
  artist: config.UI.colors.Orange,
  track: config.UI.colors.Green,
}

export default StyleSheet.create({
  container: {
    flex:1,
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    ...rowStyle,
    backgroundColor: config.UI.colors.Grey,
    borderColor: config.UI.colors.DkGrey,
  },
  selected: {
    ...rowStyle,
    backgroundColor: config.UI.colors.DkGrey,
    borderColor: config.UI.colors.Green,
  },
  text: {
    flex: 1,
    ...config.UI.styles.text,
    fontFamily: 'Montserrat-Light',
    color: config.UI.colors.DkGrey,
  },
});
