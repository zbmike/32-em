import { connect } from 'react-redux';

import { fetchPhotos, fetchMorePhotos, clearInfPhotos } from '../../actions/photo_actions';
import { follow, unfollow } from '../../actions/follow_actions';
import { setLoading, setFinished } from '../../actions/loading_actions'
import Homefeed from './homefeed';

const msp = state => ({
    users: state.entities.users,
    photos: state.entities.photos,
    currentUserId: state.session.id,
    infPhotos: state.entities.infPhotos,
    hasMore: state.ui.hasMore,
    loading: state.ui.loading,
});

const mdp = dispatch => ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    follow: ids => dispatch(follow(ids)),
    unfollow: follow => dispatch(unfollow(follow)),
    setLoading: () => dispatch(setLoading()),
    setFinished: () => dispatch(setFinished()),
    fetchMorePhotos: filters => dispatch(fetchMorePhotos(filters)),
    clearInfPhotos: () => dispatch(clearInfPhotos()),
});

export default connect(msp, mdp)(Homefeed);