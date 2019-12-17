import * as PhotoAPI from '../util/photos_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

export const receivePhotos = data => ({
    type: RECEIVE_PHOTOS,
    data
});

export const receivePhoto = data => ({
    type: RECEIVE_PHOTO,
    data
});

export const createPhoto = photoFormData => dispatch => (
    PhotoAPI.createPhoto(photoFormData).then(
        photo => dispatch(receivePhoto(photo)))
);

export const fetchPhoto = photoId => dispatch => (
    PhotoAPI.fetchPhoto(photoId).then(
        data => dispatch(receivePhoto(data)))
);