import { RECEIVE_PHOTO, RECEIVE_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_PHOTOS:
        case RECEIVE_PHOTO:
        case RECEIVE_USER:
            return merge({}, action.data.photos);
        default:
            return oldState;
    }
};