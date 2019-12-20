import { connect } from 'react-redux';

import { fetchPhoto } from '../../actions/photo_actions';
import { follow, unfollow } from '../../actions/follow_actions';
import { setLoading, setFinished } from '../../actions/loading_actions';
import ShowPhoto from './show_photo';

const msp = (state, ownProps) => {
    const photo = state.entities.photos[ownProps.match.params.photoId]
    if (!photo) return {};
    return {
    author: state.entities.users[photo.authorId],
    photo,
    currentUserId: state.session.id,
}};

const mdp = dispatch => ({
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    follow: ids => dispatch(follow(ids)),
    unfollow: followId => dispatch(unfollow(followId)),
    setLoading: () => dispatch(setLoading()),
    setFinished: () => dispatch(setFinished()),
});

export default connect(msp, mdp)(ShowPhoto);