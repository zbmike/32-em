import { RECEIVE_PHOTO, RECEIVE_PHOTOS } from '../actions/photo_actions';
import { merge } from 'lodash';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return merge({}, action.photos);
        case RECEIVE_PHOTO:
            return merge({}, action.data.photos);
        default:
            return oldState;
    }
};