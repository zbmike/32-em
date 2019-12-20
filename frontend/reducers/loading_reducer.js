import { SET_LOADING, SET_FINISHED } from '../actions/loading_actions';

export default (oldState = false, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case SET_LOADING:
            return true;
        case SET_FINISHED:
            return false;
        default:
            return oldState;
    }
};