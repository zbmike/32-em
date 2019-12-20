import { RECEIVE_PHOTO, RECEIVE_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return merge({}, action.data.photos);
        case RECEIVE_PHOTO:
            return merge({}, action.data.photos);
        case RECEIVE_USER:
            return merge({}, action.data.photos);
        case RECEIVE_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
};