import {
  RECEIVE_SEARCH_PINS
} from "../actions/pin_actions";


const searchReducer = (state={},action) => {
    Object.freeze(state);
    //let newState = Object.assign({}, state)
    let newState = {};
    switch (action.type) {
      case RECEIVE_SEARCH_PINS:
        //debugger
        action.matchedpins.map((matchedpin) => {
          newState[matchedpin.id] = matchedpin;
        });
        return newState;
      default:
        return state;
    }
}

export default searchReducer;
