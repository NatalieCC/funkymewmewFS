import { openModal } from '../../actions/modal_actions';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { fetchBoard } from '../../actions/board_actions';
import BoardPin from './board_pin';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
    // username: ownProps.match.params.username,
    //we are reading boardId in the url, which reads as below. ownprops has 
    //access from history, thats how we know url. the oppostiote of 'push' history.
    const boardId = ownProps.match.params.boardId;
    const pins = Object.values(state.entities.pins);
    const currentUser = state.entities.users[state.session.id];
    const board = state.entities.boards[boardId];
    const users = Object.values(state.entities.users);

    return ({
        boardId,board,pins,currentUser,users
    });
    
};

const mdp = dispatch => ({
    // fetchBoard: (boardId) => {
    //     dispatch(fetchBoard(boardId))
    // },
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    openModal: (modal,objectId) => dispatch(openModal(modal,objectId)),

    // closeModal: () => {
    //     dispatch(closeModal())
    // },
});

export default withRouter(connect(msp, mdp)(BoardPin));