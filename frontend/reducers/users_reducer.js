import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';
import { merge } from 'lodash';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_PHOTO:
      return merge({}, action.data.users, newState);
    default:
      return oldState;
  }
};