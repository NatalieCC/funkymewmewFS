import { RECEIVE_PINS } from "../actions/pin_actions";
import { merge } from 'lodash';


const pinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_PINS:
            return merge({}, newState, action.pins);
        default:
            return state;
    }
};

export default pinsReducer;
