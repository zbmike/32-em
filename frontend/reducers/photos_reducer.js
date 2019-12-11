import { RECEIVE_PHOTO, RECEIVE_PHOTOS } from '../actions/photo_actions';
import { merge } from 'lodash';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return action.photos;
        case RECEIVE_PHOTO:
            newState[action.photo.id] = action.photo;
            return newState;
        default:
            return oldState;
    }
};