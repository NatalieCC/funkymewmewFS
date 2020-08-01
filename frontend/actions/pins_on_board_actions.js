import * as PinsOnBoardUtil from "../util/pins_on_board_util";

export const savePinOntoBoard = (pinOnBoard) => dispatch => (
    PinsOnBoardUtil.savePinOnBoard(pinOnBoard).then(payload => (
        //do nothing
        console.log("save pin on board successfully")
    ), err => (
        //dispatch(receiveSavePinOnBoardErrors(err.responseJSON))
        console.log('supposed to be above')
    ))
);

export const deletePinOnBoard = (pinOnBoard) => dispatch => (
    PinsOnBoardUtil.deletePinOnBoard(pinOnBoard).then(payload => (
        //do nothing
        console.log("deleted pin on board successfully")
    ), err => (
        //dispatch(receiveSavePinOnBoardErrors(err.responseJSON))
        console.log('supposed to be above')
    ))
);
      
        