import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import photosReducer from './photos_reducer';
import followsReducer from './follows_reducer';

export default combineReducers({
  users: usersReducer,
  photos: photosReducer,
  follows: followsReducer
});