import * as BoardApiUtil from '../util/board_api_util';
import * as PinsOnBoardApiUtil from '../util/pins_on_board_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const RECEIVE_BOARD_PINS = 'RECEIVE_BOARD_PINS';

export const receiveBoards = (payload) => {
    return {
        type: RECEIVE_BOARDS,
        // users: payload.users,
        // boards: payload.boards,
        // pins: payload.pins,
        boards: payload
    };
};

export const receiveBoard = (payload) => {
    return {
        type: RECEIVE_BOARD,
        user: payload.user,
        board: payload.board,
        pins: payload.pins,
    };
};

export const removeBoard = (payload) => {
    return {
        type: REMOVE_BOARD,
        boardId: payload.board.id,
    };
};

export const receiveBoardErrors = (errors) => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
});
export const receiveBoardPins = (pinsonboard,boardId) => ({
    type: RECEIVE_BOARD_PINS,
    pinsonboard, boardId
});

// thunk
export const fetchPinsOnBoards = (boardId) => dispatch => (
    PinsOnBoardApiUtil.fetchPinsOnBoards(boardId).then(payload => (
        dispatch(receiveBoardPins(payload,boardId))
    ), err => (
        dispatch(receiveBoardErrors(err.responseJSON))
    ))
);


export const fetchBoards = () => dispatch => (
    BoardApiUtil.fetchBoards().then(payload => (
        dispatch(receiveBoards(payload))
    ), err => (
        dispatch(receiveBoardErrors(err.responseJSON))
    ))
);

export const fetchBoard = id => dispatch => (
    BoardApiUtil.fetchBoard(id).then(payload => (
        dispatch(receiveBoard(payload))
    ), err => (
        dispatch(receiveBoardErrors(err.responseJSON))
    ))
);

export const createBoard = (board) => dispatch => (
    BoardApiUtil.createBoard(board).then(payload => (
        dispatch(receiveBoard(payload))
    ), err => (
        dispatch(receiveBoardErrors(err.responseJSON))
    ))
);

export const updateBoard = board => dispatch => (
    BoardApiUtil.updateBoard(board).then(payload => (
        dispatch(receiveBoard(payload))
    ), err => (
        dispatch(receiveBoardErrors(err.responseJSON))
    ))
);

export const deleteBoard = id => dispatch => (
    BoardApiUtil.deleteBoard(id).then(payload => (
        dispatch(removeBoard(payload))
    ), err => (
        dispatch(receiveBoardErrors(err.responseJSON))
    ))
);
