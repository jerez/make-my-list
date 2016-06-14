import { StyleSheet } from 'react-native'

const spotifyGreen = '#1ED760';

export default StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 20,
  },
  picture: {
    height: 100,
    borderRadius: 50,
    width: 100
  },
  button: {
    marginTop:20,
    paddingVertical:10,
    paddingHorizontal:50,
    height:50,
    overflow:'hidden',
    borderRadius:25,
    backgroundColor: 'black',
    fontSize: 20,
    color: spotifyGreen,
  },
});
