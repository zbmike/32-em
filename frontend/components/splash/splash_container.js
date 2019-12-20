import { connect } from 'react-redux';

import { fetchMorePhotos, clearInfPhotos } from '../../actions/photo_actions';
import { setLoading, setFinished } from '../../actions/loading_actions';
import Splash from './splash';

const msp = state => ({
    users: state.entities.users,
    photos: state.entities.infPhotos,
    loading: state.ui.loading,
    hasMore: state.ui.hasMore,
});

const mdp = dispatch => ({
    fetchPhotos: filter => dispatch(fetchMorePhotos(filter)),
    setLoading: () => dispatch(setLoading()),
    setFinished: () => dispatch(setFinished()),
    clearInfPhotos: () => dispatch(clearInfPhotos()),
});

export default connect(msp, mdp)(Splash);