import alt from '../alt';

class AuthActions {
  constructor() {
    this.generateActions(
      'login',
      'logInFailed',
      'fetchUser',
      'fetchUserSuccess',
      'fetchUserFailed',
      'logOut',
    );
  }
}
export default alt.createActions(AuthActions);
