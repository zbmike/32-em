import { connect } from 'react-redux';

import { fetchPhotos } from '../../actions/photo_actions';
import { follow, unfollow } from '../../actions/follow_actions';
import { setLoading, setFinished } from '../../actions/loading_actions'
import Homefeed from './homefeed';

const msp = state => ({
    users: state.entities.users,
    photos: state.entities.photos,
    currentUserId: state.session.id,
});

const mdp = dispatch => ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    follow: ids => dispatch(follow(ids)),
    unfollow: follow => dispatch(unfollow(follow)),
    setLoading: () => dispatch(setLoading()),
    setFinished: () => dispatch(setFinished())
});

export default connect(msp, mdp)(Homefeed);