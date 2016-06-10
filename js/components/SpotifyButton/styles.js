import { StyleSheet } from 'react-native'

const spotifyGreen = '#1ED760';

export default StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  container: {
    marginTop:20,
    paddingVertical:10,
    paddingHorizontal:25,
    height:50,
    overflow:'hidden',
    borderRadius:25,
    backgroundColor: 'black'
  },
  default: {
    fontSize: 20,
    color: spotifyGreen,
  },
  disabled: {
    color: 'red',
  },
  logo: {
    flex: 1,
    width:160,
  },
});
