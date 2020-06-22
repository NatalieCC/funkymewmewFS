import { RECEIVE_BOARD_PINS } from "../actions/board_actions";

const pinsonboardReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_BOARD_PINS:
            newState[action.board.id] = action.pinsonboard;
            return newState;
            //return Object.assign(merge({}, newState, { [action.boardId]: action.pinsonboard}); 
        default:
            return state;
    } 
}

export default pinsonboardReducer;