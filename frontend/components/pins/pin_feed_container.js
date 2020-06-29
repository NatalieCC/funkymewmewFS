import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { fetchAllPins, updatePin, deletePin, clearPinIndex } from '../../actions/pin_actions';


const mSTP = (state) => {
    return(
         {
             type: 'Feed',
             pins: Object.values(state.entities.pins)}
    )       
};

const mDTP = dispatch => ({
    fetchPins: (page) => dispatch(fetchAllPins(page)),
    updatePin: pin => dispatch(updatePin(pin)),
    deletePin: pinId => dispatch(deletePin(pinId)),
    clearPinIndex: () => dispatch(clearPinIndex()),
});

export default withRouter(connect(mSTP, mDTP)(PinIndex));
