import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    formType: 'login',
    headerText: 'Login to 32em',
    para: ""
});

const mdp = dispatch => ({
    processForm: formUser => dispatch(login(formUser))
});

export default connect(msp, mdp)(SessionForm);