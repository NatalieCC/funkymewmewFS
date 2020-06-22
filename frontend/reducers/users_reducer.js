import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user_actions";
//import { RECEIVE_BOARD, RECEIVE_PIN } from '../actions/bench_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    //debugger;
    switch (action.type) {    
        case RECEIVE_CURRENT_USER:
            return Object.assign(nextState, { [action.user]: action.currentUser });
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            return Object.assign(nextState, action.payload.user);  
        // case RECEIVE_BOARD:
        //     return Object.assign({}, state, { [action.author.id]: action.author });
        // case RECEIVE_PIN:
        //     return Object.assign({}, state, action.authors);
        default:
            return state;
    }
};

export default usersReducer;
