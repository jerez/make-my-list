import alt from '../alt';

class ContentActions {
  constructor() {
    this.generateActions(
      'fetchGenres',
      'fetchGenresSuccess',
      'fetchGenresFailed',
      'fetchTopContent',
      'fetchTopContentSuccess',
      'fetchTopContentFailed',
    );
  }
}
export default alt.createActions(ContentActions);
