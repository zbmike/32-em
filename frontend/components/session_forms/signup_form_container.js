import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    formType: 'signup',
    headerText: 'Join 32em',
    para: "Discover and share incredible photos, gain global exposure, and get paid for your work.",
    errors: state.errors.session
});

const mdp = dispatch => ({
    processForm: formUser => dispatch(signup(formUser))
});

export default connect(msp, mdp)(SessionForm);