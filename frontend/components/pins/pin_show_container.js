import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import PinShow from './pin_show';
import { openModal } from '../../actions/modal_actions'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    //debugger
    const currentUser = state.session.currentUserId || {};
    const pinId = ownProps.match.params.pinId;
    const pin = state.entities.pins[pinId];
    
    return {   
        pin,currentUser,pinId
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    openModal: (modal, objectId) => dispatch(openModal(modal, objectId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinShow))