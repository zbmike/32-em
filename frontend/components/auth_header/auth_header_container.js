import { connect } from 'react-redux';
import AuthHeader from './auth_header';
import { logout } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal("upload"))
});

export default connect(msp, mdp)(AuthHeader);