import { closeModal } from '../../actions/modal_actions';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { createBoard } from '../../actions/board_actions';
import CreateBoardForm from './create_board_form';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
      //debugger 
    return {
    //username: ownProps.match.params.username,
    currentUser: state.entities.users[state.session.currentUserId.id],
    formType: 'create',
    header: 'Create board',
    buttonText: 'Create',
    board: { title: '', description: '' },
    modal: state.ui.modal
}};

const mdp = dispatch => ({
    //createBoardAction: (board) => dispatch(createBoard(board)),
    action: (board) => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(msp, mdp)(CreateBoardForm));