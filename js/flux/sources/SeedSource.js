import constants from '../../constants';
import SeedActions from '../actions/SeedActions';
import ApiClient from './ApiClient'

const SeedSource = {
    requestGenres: {
      remote(state) {
        return ApiClient.performRequest(credentials, 'GET', 'recommendations/available-genre-seeds');
      },
      success: SeedActions.fetchGenresSuccess,
      error: SeedActions.fetchGenresFailed,
    }
};

export default SeedSource
