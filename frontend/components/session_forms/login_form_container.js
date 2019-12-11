import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    formType: 'login',
    headerText: 'Login to 32em',
    para: "",
    errors: state.errors.session
});

const mdp = dispatch => ({
    processForm: formUser => dispatch(login(formUser)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(msp, mdp)(SessionForm);