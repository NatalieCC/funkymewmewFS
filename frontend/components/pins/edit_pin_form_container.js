import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePin, deletePin } from '../../actions/pin_actions';
import EditPinForm from './edit_pin_form';
import { closeModal, openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {

  const pinId = state.ui.currentObject;
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
    pin, currentUser
  });
};

const mdp = dispatch => ({
  updatePin: (pin) => dispatch(updatePin(pin)),
  deletePin: (pinId) => dispatch(deletePin(pinId)),
  closeModal: (modal) => dispatch(closeModal(modal)),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default withRouter(connect(msp, mdp)(EditPinForm));