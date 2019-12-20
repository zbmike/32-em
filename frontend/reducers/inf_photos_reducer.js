import { RECEIVE_MORE_PHOTOS, CLEAR_INF_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

export default (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_MORE_PHOTOS:
            const photos = merge({}, action.data.photos);
            const newPhotos = Object.values(photos);
            const newState = newPhotos.concat(oldState);
            return newState;
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_INF_PHOTOS:
            return [];
        default:
            return oldState;
    }
};