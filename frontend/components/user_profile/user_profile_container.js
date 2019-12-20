import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import { follow, unfollow } from '../../actions/follow_actions';
import { setLoading, setFinished } from '../../actions/loading_actions';
import UserProfile from './user_profile';

const msp = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        photos: state.entities.photos,
        currentUserId: state.session.id
    }
};

const mdp = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    follow: ids => dispatch(follow(ids)),
    unfollow: followId => dispatch(unfollow(followId)),
    setLoading: () => dispatch(setLoading()),
    setFinished: () => dispatch(setFinished()),
});

export default connect(msp, mdp)(UserProfile);