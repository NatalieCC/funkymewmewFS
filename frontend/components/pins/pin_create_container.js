import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {createPin} from '../../actions/pin_actions';
import {fetchBoards} from '../../actions/board_actions';
import PinCreateForm from './pin_create_form';

const msp = (state, ownProps) => {
    const currentUser = state.session.currentUserId;
    const username = ownProps.match.params.username;
    const boards = Object.values(state.entities.boards)
    .filter(board => board.user_id === currentUser.id);

    return ({
        currentUser,username,boards
    });
    
};

const mdp = dispatch => ({
    createPin: (pin,boardId) => dispatch(createPin(pin,boardId)),
    fetchBoards: () => dispatch(fetchBoards())
});

export default withRouter(connect(msp, mdp)(PinCreateForm));