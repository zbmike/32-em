import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = formUser => dispatch => (
  SessionAPI.login(formUser).then(
    user => dispatch(receiveCurrentUser(user)), 
    errs=>dispatch(receiveSessionErrors(errs.responseJSON)))
);

export const logout = () => dispatch => (
  SessionAPI.logout().then(
    () => dispatch(logoutCurrentUser()), 
    errs=>dispatch(receiveSessionErrors(errs.responseJSON)))
);

export const signup = formUser => dispatch => (
  SessionAPI.signup(formUser).then(
    user => dispatch(receiveCurrentUser(user)), 
    errs=>dispatch(receiveSessionErrors(errs.responseJSON)))
);