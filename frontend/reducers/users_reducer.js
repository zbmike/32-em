import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PHOTO, RECEIVE_PHOTOS } from '../actions/photo_actions';
import { FOLLOW, UNFOLLOW } from '../actions/follow_actions';
import { RECEIVE_USER } from '../actions/user_actions'
import { merge } from 'lodash';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case FOLLOW:
      let followUser = newState[action.follow.followee_id];
      followUser.following = true;
      followUser.followId = action.follow.id;
      followUser.followerCount = followUser.followerCount + 1;
      return newState;
    case UNFOLLOW:
      let unfollowUser = newState[action.follow.followee_id];
      unfollowUser.following = false;
      unfollowUser.followId = null;
      unfollowUser.followerCount = unfollowUser.followerCount - 1;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_PHOTOS:
      return merge({}, action.data.users, newState);
    case RECEIVE_PHOTO:
      return merge({}, action.data.users, newState);
    case RECEIVE_USER:
      return merge({}, action.data.users, newState);
    default:
      return oldState;
  }
};