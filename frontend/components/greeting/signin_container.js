import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapStateToProps = ({ entities,session }) => ({
    currentUser: entities.users[session.id],
    cornerButtonText: 'register'
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);
