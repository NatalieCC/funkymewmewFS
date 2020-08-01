import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePin, deletePin } from '../../actions/pin_actions';
import EditPinForm from './edit_pin_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { deletePinOnBoard } from '../../actions/pins_on_board_actions';

const msp = (state, ownProps) => {
  //debugger
  const pinId = state.ui.currentObject['pinId'];
  const type = state.ui.currentObject['type'];
  const boardId = state.ui.currentObject['boardId']
  //const pin = state.entities.pins[pinId];
  //const pin = state.entities.pins[pinId] || state.entities.pins.pin.pin;
  const pin = state.entities.pins[pinId];
  const currentUser = state.session.currentUserId || {};
  
  //const users = Object.values(state.entities.users);
  
//   let creator;

//   if (users.length > 0 && pin) {
//     const user = users.filter(user => user.id === pin.creator.id)[0];
//     creator = user.username;
//   }
  //debugger
  return ({
    pin, currentUser,type,boardId
  });
};

const mdp = dispatch => ({
  updatePin: (pin) => dispatch(updatePin(pin)),
  deletePin: (pinId) => dispatch(deletePin(pinId)),
  closeModal: (modal) => dispatch(closeModal(modal)),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
  deletePinOnBoard: (pinOnBoard) => dispatch(deletePinOnBoard(pinOnBoard)),
});

export default withRouter(connect(msp, mdp)(EditPinForm));