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
    );
  }
}
export default alt.createActions(ContentActions);
