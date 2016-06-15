import ContentActions from '../actions/ContentActions';
import SpotifyApiClient from 'MakeMyList/js/utils/SpotifyApiClient'

const ContentSource = {
    requestGenres: {
      remote(state,credentials) {
        return SpotifyApiClient.performRequest(credentials, 'GET', 'recommendations/available-genre-seeds');
      },
      success: ContentActions.fetchGenresSuccess,
      error: ContentActions.fetchGenresFailed,
    },

    requestTopArtists: {
      remote(state, credentials) {
        return SpotifyApiClient.performRequest(credentials, 'GET', 'me/top/artists');
      },
      success: ContentActions.fetchTopArtistsSuccess,
      error: ContentActions.fetchTopArtistsFailed,
    },

    requestTopTracks: {
      remote(state, credentials) {
        return SpotifyApiClient.performRequest(credentials, 'GET', 'me/top/tracks');
      },
      success: ContentActions.fetchTopTracksSuccess,
      error: ContentActions.fetchTopTracksFailed,
    }
};

export default ContentSource
