import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import loadingReducer from './loading_reducer';
import hasMoreReducer from './has_more_reducer';

export default combineReducers({
    modal: modalReducer,
    loading: loadingReducer,
    hasMore: hasMoreReducer
});