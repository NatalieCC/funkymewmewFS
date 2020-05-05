import { connect } from 'react-redux';
import React from 'react';

import { logout } from "../../actions/session_actions";
import { Link, withRouter } from 'react-router-dom';
import Greeting from './greeting';

const mapStateToProps = (state) => {
    return ({
        cornerButtonText: 'log in'
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));