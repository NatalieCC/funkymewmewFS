import {updateBoard, deleteBoard} from '../../actions/board_actions';
import {connect} from 'react-redux';
import CreateBoardForm from './create_board_form';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';


const msp = (state,ownProps) => {
    //next line???
    //const boardId = ownProps.match.params.boardId;
    debugger
    const boardId = ownProps.location.pathname.split("/")[2];
    const board = state.entities.boards[boardId];
    //const currentUser = state.entities.users[state.session.id];
    //debugger
    //below make a hashmap
    return ({
        board,
        boardId,
        buttonText: 'Save',
        //currentUser,
        formType: 'edit',
        header: 'Edit Your Board',
        modal: state.ui.modal
    })
};

const mdp = dispatch => ({
        action: (board) => dispatch(updateBoard(board)),   
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
        closeModal: () => dispatch(closeModal()),
    });

export default withRouter(connect(msp, mdp)(CreateBoardForm));