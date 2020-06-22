import {updateBoard, deleteBoard} from '../../actions/board_actions';
import {connect} from 'react-redux';
import CreateBoardForm from './create_board_form';
import { withRouter } from 'react-router-dom';

const msp = (state,ownProps) => {
    //next line???
    //const boardId = state.ui.currentUser;
    const boardId = ownProps.match.params.boardId;
    const board = state.entities.boards[boardId];
    const currentUser = state.enetities.users[state.session.id];

    return ({
        board,
        buttonText: 'Save',
        currentUser,
        formType: 'edit',
        header: 'Edit Your Board',
    })
};

const mdp = dispatch => ({
        action: (board) => dispatch(updateBoard(board)),
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
        closeModal: () => dispatch(closeModal()),
    });

export default withRouter(connect(msp,mdp))(CreateBoardForm)