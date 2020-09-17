import { logout } from "../../actions/session_actions";
import { connect } from 'react-redux';
import Navbar from './navbar';
import { fetchSearchPins } from '../../actions/pin_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => {
    //debugger
    return ({
       //currentUser: state.entities.users[state.session.currentUserId],
       currentUser: state.session.currentUserId,
    });
};

const mDTP = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        fetchSearchPins: keyword => dispatch(fetchSearchPins(keyword))
    });
};

export default withRouter(connect(mSTP, mDTP)(Navbar));