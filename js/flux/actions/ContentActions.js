import alt from '../alt';

class ContentActions {
  constructor() {
    this.generateActions(
      'fetchSeeds',
      'fetchGenresSuccess',
      'fetchGenresFailed',
      'fetchTopContentSuccess',
      'fetchTopContentFailed',
    );
  }
}
export default alt.createActions(ContentActions);
