import {RECEIVE_CURRENT_USER, 
        LOGOUT_CURRENT_USER} 
        from '../actions/session_actions';
import { merge } from 'lodash';

export default (oldState = { id: null } , action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { id: action.user.id });
    case LOGOUT_CURRENT_USER:
      return merge({}, { id: null });
    default:
      return oldState;
  }
};
