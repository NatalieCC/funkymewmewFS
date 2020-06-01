import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    // debugger;
    return {
        errors: errors.session,
        formType: 'Log In',
        //navLink: <Link to="/signup">Let's sign up!</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    // debugger;
    return {
        processForm: (user) => dispatch(login(user)),
        // otherForm: (
        //     <button onClick={() => dispatch(openModal('signup'))}>
        //         Signup
        //     </button>
        // ),
        // closeModal: () => dispatch(closeModal()),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        demoLogin: demoUser => dispatch(login(demoUser))
    };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
