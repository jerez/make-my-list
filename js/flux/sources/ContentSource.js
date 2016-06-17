import ContentActions from '../actions/ContentActions';
import SpotifyApiClient from 'MakeMyList/js/utils/SpotifyApiClient'

const ContentSource = {
    requestGenres: {
      local(state) {
        return state.genres ? state.genres : null;
      },
      remote(state,credentials) {
        return SpotifyApiClient.performRequest(credentials, 'GET', 'recommendations/available-genre-seeds');
      },
      success: ContentActions.fetchGenresSuccess,
      error: ContentActions.fetchGenresFailed,
    },

    requestTopArtists: {
      local(state) {
        return state.artists ? state.artists : null;
      },
      remote(state, credentials) {
        return SpotifyApiClient.performRequest(credentials, 'GET', 'me/top/artists');
      },
      success: ContentActions.fetchTopArtistsSuccess,
      error: ContentActions.fetchTopArtistsFailed,
    },

    requestTopTracks: {
      local(state) {
        return state.tracks ? state.tracks : null;
      },
      remote(state, credentials) {
        return SpotifyApiClient.performRequest(credentials, 'GET', 'me/top/tracks');
      },
      success: ContentActions.fetchTopTracksSuccess,
      error: ContentActions.fetchTopTracksFailed,
    },

    requestRecommendations: {
      remote(state, credentials, options) {
        return SpotifyApiClient.getRecommendations(credentials, state.selectedItems, options);
      },
      success: ContentActions.getRecommendationsSuccess,
      error: ContentActions.getRecommendationsFailed,
    }
};

export default ContentSource
