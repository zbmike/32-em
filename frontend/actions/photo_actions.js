import * as PhotoAPI from '../util/photos_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

export const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
});

export const receivePhoto = photo => ({
    type: RECEIVE_PHOTO,
    photo
});

export const createPhoto = photoFormData => dispatch => (
    PhotoAPI.createPhoto(photoFormData).then(
        photo => dispatch(receiveCurrentUser(photo)))
);