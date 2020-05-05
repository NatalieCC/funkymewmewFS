import { logout } from "../../actions/session_actions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from './navbar';
import { requestUser } from '../../actions/user_actions';


const mSTP = (state={}) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        currentId: state.session.id
    });
};

const mDTP = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        requestUser: (username) => dispatch(requestUser(username)),
    });
};

export default withRouter(connect(mSTP, mDTP)(Navbar));