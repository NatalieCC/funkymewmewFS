import {
    RECEIVE_PINS,
    RECEIVE_PIN,
    REMOVE_PIN,
    CLEAR_PIN_INDEX
} from '../actions/pin_actions';

import {RECEIVE_USER} from '../actions/user_actions';

const pinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    //inside receive pins case, we iterate over action.pins, for each pin, we grab the pin's id
    //line 11 newState,  newState[currentPin.id] = currentPin return newState
    switch (action.type) {
        case RECEIVE_USER:
            return action.payload.pins;
        case RECEIVE_PINS:
            //debugger
            action.pins.map(currentPin => {
                newState[currentPin.id] = currentPin;
            })
            return newState;
        case RECEIVE_PIN:
            return Object.assign(newState,action);
        case REMOVE_PIN:
            delete newState[action.pinId];
            return newState;
        case CLEAR_PIN_INDEX:
            return {};
        default:
            return state;
    }
};

export default pinsReducer;
