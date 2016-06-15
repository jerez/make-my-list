import ContentActions from '../actions/ContentActions';
import SpotifyApiClient from 'MakeMyList/js/utils/SpotifyApiClient'

const ContentSource = {
    requestGenres: {
      remote(state) {
        return SpotifyApiClient.performRequest(credentials, 'GET', 'recommendations/available-genre-seeds');
      },
      success: ContentActions.fetchGenresSuccess,
      error: ContentActions.fetchGenresFailed,
    }
};

export default ContentSource
