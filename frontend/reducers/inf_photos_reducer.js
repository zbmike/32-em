import { RECEIVE_MORE_PHOTOS } from '../actions/photo_actions';
import { merge } from 'lodash';

export default (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_MORE_PHOTOS:
            const photos = merge({}, action.data.photos);
            const newPhotos = Object.values(photos);
            newPhotos.pop();
            const newState = oldState.concat(newPhotos);
            return newState;
        default:
            return oldState;
    }
};