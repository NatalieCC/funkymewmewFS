import { logout } from "../../actions/session_actions";
import { connect } from 'react-redux';
import Navbar from './navbar';

const mSTP = (state) => {
    console.log(state);
    return ({
        currentUser: state.entities.users[state.session.currentUserId],
    });
};

const mDTP = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
    });
};

export default connect(mSTP, mDTP)(Navbar);