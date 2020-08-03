import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePinOnBoard } from '../../actions/pins_on_board_actions';
import { deletePin } from '../../actions/pin_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import DeletePinForm from './delete_pin_form';

const msp = (state, ownProps) => {
    debugger
    //const pinId = state.ui.currentObject;
    // {'pinId': 133,
    //   'type': 'board',
    //   'boardId': 122 }
    const pinId = state.ui.currentObject['pinId'];
    const type = state.ui.currentObject['type'];
    //const boardId = state.ui.currentObject['boardId'];
    //const boardId = ownProps.location.state.boardId;
    //const boardId = ownProps.location.pathname.split("/").slice(0).pop();
    const username = state.entities.users.username;

    return ({
        pinId,
        type,
        //boardId,
        username,
    })
};

const mdp = dispatch => ({
    closeModal: (modal) => dispatch(closeModal(modal)),
    deletePin: (pinId) => dispatch(deletePin(pinId)),
    deletePinOnBoard: (pinOnBoard) => dispatch(deletePinOnBoard(pinOnBoard)),
    // fetchBoardIdFromPinId: (pinId) => fetchBoardIdFromPinId(pinId),
});

export default withRouter(connect(msp, mdp)(DeletePinForm));