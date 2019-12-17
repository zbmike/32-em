import * as FollowAPI from '../util/follows_api_util';

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";

export const receiveFollow = follow => ({
    type: FOLLOW,
    follow
})

export const deleteFollow = follow => ({
    type: UNFOLLOW,
    follow
})

export const follow = ids => dispatch => (
    FollowAPI.follow(ids).then(
        follow => dispatch(receiveFollow(follow))
    )
);

export const unfollow = followId => dispatch => (
    FollowAPI.unfollow(followId).then(
        follow => dispatch(deleteFollow(follow))
    )
)