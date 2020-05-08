import { logout } from "../../actions/session_actions";
import { connect } from 'react-redux';
import Navbar from './navbar';

const mSTP = (state={}) => {
    return ({
        currentUser: state.entities.users[state.session.id],
    });
};

const mDTP = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
    });
};

export default connect(mSTP, mDTP)(Navbar);