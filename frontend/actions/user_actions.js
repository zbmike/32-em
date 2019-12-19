import * as UserAPI from '../util/users_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = data => ({
    type: RECEIVE_USER,
    data
});

export const fetchUser = userId => dispatch => (
    UserAPI.fetchUser(userId).then(
        data => dispatch(receiveUser(data)))
);