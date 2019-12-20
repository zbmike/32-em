import * as PhotoAPI from '../util/photos_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_MORE_PHOTOS = "RECEIVE_MORE_PHOTOS";
export const CLEAR_INF_PHOTOS = "CLEAR_INF_PHOTOS";

export const receivePhotos = data => ({
    type: RECEIVE_PHOTOS,
    data
});

export const receivePhoto = data => ({
    type: RECEIVE_PHOTO,
    data
});

export const receiveMorePhotos = data => ({
    type: RECEIVE_MORE_PHOTOS,
    data
});

export const clearInfPhotos = () => ({
    type: CLEAR_INF_PHOTOS,
})

export const createPhoto = photoFormData => dispatch => (
    PhotoAPI.createPhoto(photoFormData)
);

export const fetchPhoto = photoId => dispatch => (
    PhotoAPI.fetchPhoto(photoId).then(
        data => dispatch(receivePhoto(data)))
);

export const fetchPhotos = () => dispatch => (
    PhotoAPI.fetchPhotos().then(
        data => dispatch(receivePhotos(data))
    )
);

export const fetchMorePhotos = filters => dispatch => (
    PhotoAPI.fetchPhotos(filters).then(
        data => dispatch(receiveMorePhotos(data))
    )
);