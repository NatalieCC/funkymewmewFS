import { logout } from "../../actions/session_actions";
import { connect } from 'react-redux';
import Navbar from './navbar';

const mSTP = (state={}) => {
    return ({
        currentUser: state.session.currentUser,
    });
};

const mDTP = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
    });
};

export default connect(mSTP, mDTP)(Navbar);