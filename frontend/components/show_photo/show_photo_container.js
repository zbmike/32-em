import { connect } from 'react-redux';

import { fetchPhoto } from '../../actions/photo_actions';
import ShowPhoto from './show_photo';

const msp = (state, ownProps) => {
    const photo = state.entities.photos[ownProps.match.params.photoId]
    if (!photo) return {};
    return {
    author: state.entities.users[photo.authorId],
    photo
}};

const mdp = dispatch => ({
    fetchPhoto: photoId => (dispatch(fetchPhoto(photoId)))
});

export default connect(msp, mdp)(ShowPhoto);