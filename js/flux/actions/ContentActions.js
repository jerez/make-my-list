import alt from '../alt';

class ContentActions {
  constructor() {
    this.generateActions(
      'fetchSeeds',
      'fetchGenresSuccess',
      'fetchGenresFailed',
      'fetchTopArtistsSuccess',
      'fetchTopArtistsFailed',
      'fetchTopTracksSuccess',
      'fetchTopTracksFailed',
      'selectItem',
      'getRecommendations',
      'getRecommendationsSuccess',
      'getRecommendationsFailed',
      'deleteResult'
    );
  }
}
export default alt.createActions(ContentActions);
