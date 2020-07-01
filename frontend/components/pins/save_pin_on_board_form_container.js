import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//import { createPinJoin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';
import SavePinOnBoardForm from './save_pin_on_board_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    //debugger
    // const username = state.session.currentUserId.username;
    // const currentUser = state.entities.users[username] || {};
    const currentUser = state.session.currentUserId
    const pinId = state.ui.currentObject;
    const pin = state.entities.pins[pinId];
    const boards = Object.values(state.entities.boards)
        .filter(board => board.user_id === currentUser.id);
    debugger
    return ({
        currentUser, pin, boards
    });
};

const mDTP = dispatch => ({
    //createPinJoin: (pin, boardId) => dispatch(createPinJoin(pin, boardId)),
    fetchBoards: () => dispatch(fetchBoards()),
    closeModal: (modal) => dispatch(closeModal(modal)),
});

export default withRouter(connect(mSTP, mDTP)(SavePinOnBoardForm));