import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';
import { FOLLOW, UNFOLLOW } from '../actions/follow_actions';
import { merge } from 'lodash';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case FOLLOW:
      const {followee_id, user_id} = action.follow;
      if (!newState[followee_id].followedBy) {
        newState[followee_id].followedBy = [user_id];
      } else {
        newState[followee_id].followedBy.push(user_id);
      }
      return newState;
    case UNFOLLOW:
      const { followee_id:fol_id, user_id: u_id } = action.follow;
      const idx = newState[fol_id].followedBy.indexOf(u_id);
      if (idx > -1) {
        newState[fol_id].followedBy.splice(idx, 1);
      }
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