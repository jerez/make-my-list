import alt from '../alt';

class SeedActions {
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
export default alt.createActions(SeedActions);
