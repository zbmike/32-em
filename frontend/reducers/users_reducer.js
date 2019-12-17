import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';
import { FOLLOW, UNFOLLOW } from '../actions/follow_actions';
import { merge } from 'lodash';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case FOLLOW:
      newState[action.follow.followee_id].following = true;
      newState[action.follow.followee_id].followId = action.follow.id;
      return newState;
    case UNFOLLOW:
      newState[action.follow.followee_id].following = false;
      newState[action.follow.followee_id].followId = null;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_PHOTO:
      return merge({}, action.data.users, newState);
    default:
      return oldState;
  }
};