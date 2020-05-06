import * as PinApiUtil from "../util/pin_api_util";

export const RECEIVE_PINS = "RECEIVE_PINS";


export const receivePins = (pins) => {
    return {
        type: RECEIVE_PINS,
        pins
    };
};


// thunk

export const fetchAllPins = (page) => dispatch => (
    PinApiUtil.fetchAllPins(page)
    .then(pins => (dispatch(receivePins(pins))
    ))
);

