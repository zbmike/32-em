import { FOLLOW, UNFOLLOW } from '../actions/follow_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';
import { merge } from 'lodash';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_PHOTO:
            return merge({}, oldState, action.data.follows);
        case FOLLOW:
            return merge({}, oldState, {[action.follow.id]: action.follow});
        case UNFOLLOW:
            let newState = merge({}, oldState);
            delete newState[action.follow.id];
            return newState;
        default:
            return oldState;
    }
};