import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import PinShow from './pin_show';
import { openModal } from '../../actions/modal_actions'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    //debugger
    return {
        pin: state.entities.pins[ownProps.match.params.pinId],
        
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    openModal: modal => dispatch(openModal(modal))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinShow))