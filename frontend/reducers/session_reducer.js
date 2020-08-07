import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const _nullUser = Object.freeze({
    currentUserId: null
});

// state.session.
const sessionReducer = (state = _nullUser, action) => {
    // type: action.type
    // data: action.<property name from action> , action.currentUser
    Object.freeze(state);
    //debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            return { currentUserId: action.currentUser.user};
        // case RECEIVE_USER:
        //     return { currentUserId: action.payload.user};
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            
            return state;
    }
};

export default sessionReducer;
