
const spotify  = {
  accountHost: 'accounts.spotify.com',
  apiHost: 'api.spotify.com',
  clientId: '2d2509ba996f427aa2de23d38b3a040a',
  clientSecret: '0c40eec904b5478e86ec759c56c229eb',
  redirectUri: 'makemylist://login/',
}

const uiColors = {
  White: '#ffffff',
  Black: '#000000',
  Grey: '#999999',
  LtGrey: '#e6e6e6',
  DkGrey: '#262626',
  Orange: '#ff6000',
  Red: '#f25555',
  Yellow: '#ebd411',
  Blue: '#0993c7',
  Green: '#82b919',
  BlueGreen: '#19b9b7',
}

const defaultStyles = {
  text:{
    color: uiColors.LtGrey,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular'
  },
  title: {
    color: uiColors.Blue,
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold'
  },
}

export default {
  Spotify: spotify,
  UI: {
    colors: uiColors,
    styles: defaultStyles,
  }
}
