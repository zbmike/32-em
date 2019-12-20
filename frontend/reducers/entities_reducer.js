import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import photosReducer from './photos_reducer';
import infPhotosReducer from './inf_photos_reducer';

export default combineReducers({
  users: usersReducer,
  photos: photosReducer,
  infPhotos: infPhotosReducer
});