import {
    RECEIVE_PINS,
    RECEIVE_PIN,
    REMOVE_PIN,
    CLEAR_PIN_INDEX
} from '../actions/pin_actions';

import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_BOARD} from '../actions/board_actions';
//whenever we fetch a borad, we also fecth a board's pins; when we get the data from the db, there 
//will be board and pins.
//so we need the pin and boards reducer listending to the recieve board action.
//the board reducer will take the board data and put it in the board slice of state in the redux strore.
//the pin reducer will do same but with the pin data and put in the pin slice
//of state in the redux store. same thing like line 8.
//every single action hits everything single reducer, but not every reducer will do someting about it.
//if debugger in every reducer, evertime u refresh, it will hit every reducer, but not 
//every reducer will do something.

const pinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    //inside receive pins case, we iterate over action.pins, for each pin, we grab the pin's id
    //line 11 newState,  newState[currentPin.id] = currentPin return newState
    switch (action.type) {
        case RECEIVE_USER:
            return action.payload.pins || {};
        case RECEIVE_PINS:
            //debugger
            action.pins.map(currentPin => {
                newState[currentPin.id] = currentPin;
            })
            return newState;
        case RECEIVE_PIN:
            //return Object.assign(newState,action);
            newState[action.payload.pin.id] = action.payload.pin;
            return newState;
        case REMOVE_PIN:
            //debugger
            //console.log(888)
            delete newState[action.pinId];
            return newState;
        case CLEAR_PIN_INDEX:
            return {};
        case RECEIVE_BOARD:
            if (action.pins) {
                return action.pins;
            } else {
                return {};
            }
        default:
            return state;
    }
};

export default pinsReducer;
