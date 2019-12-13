import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { createPhoto } from '../../actions/photo_actions';
import UploadForm from './upload_form';

const msp = state => ({
    modal: state.ui.modal,
    currentUserId: state.session.id
})

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createPhoto: formData => dispatch(createPhoto(formData))
})

export default connect(msp, mdp)(UploadForm)