import { RECEIVE_MORE_PHOTOS } from '../actions/photo_actions';

export default (oldState = false, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_MORE_PHOTOS:
            return action.data.ui.hasMore;
        default:
            return oldState;
    }
};