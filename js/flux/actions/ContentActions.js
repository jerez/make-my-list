import alt from '../alt';

class ContentActions {
  constructor() {
    this.generateActions(
      'fetchSeeds',
      'fetchTopArtistsSuccess',
      'fetchTopArtistsFailed',
      'fetchTopTracksSuccess',
      'fetchTopTracksFailed',
      'selectItem',
    );
  }
}
export default alt.createActions(ContentActions);
