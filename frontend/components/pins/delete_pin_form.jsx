import React from 'react';
import { withRouter,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deletePin } from '../../actions/pin_actions';
// import { fetchBoardIdFromPinId } from '../../util/pins_on_board_util';

class DeletePinForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        //this.state = this.props.pinId;
        // this.state = {
        //     'deleted': false
        //     boardId: ''
        // }
        // this.fetchBoardIdFromPinId= this.props.fetchBoardIdFromPinId.bind(this);
    }

    // componentDidMount() {
    //     this.fetchBoardIdFromPinId(this.props.pinId)
    //     .then( res => {
    //         debugger
    //         this.setState({boardId: res.boardId})
    //     })
    // }

    handleDelete(e) {
        debugger
        //let path;
        // if (this.props.type == 'board') path = `/boards/${this.props.boardId}`;
        //{ path = '/feed';}
        if (this.props.type == 'Feed') {
            this.props.deletePin(this.props.pinId)
            .then(this.props.closeModal())
            // .then(this.props.history.push(`/feed`))
                .then(window.location.href = `http://localhost:3000/#/feed`)
        }
        if (this.props.type == 'Profile') {
            this.props.deletePin(this.props.pinId)
            .then(this.props.closeModal())
            .then(window.location.href = `http://localhost:3000/#/${this.props.username}/pins`)
        }
        // if (this.props.type == 'pin') path = `/${this.props.username}/pins`; 
        
        // if (window.location.href == `http://localhost:3000/#/boards/${this.props.boardId}`) {
        //     path = `/boards/${this.props.boardId}`;
        // }
        // else if (window.location.href == `http://localhost:3000/#/${this.props.username}/pins`) {
        //     path = `/${this.props.username}/pins`;
        // }
        // else { path = `http://localhost:3000/#/feed`;}
        // if(this.props.identifier != 'board')

        // this.props.deletePin(this.props.pinId)
        //     // .then(this.setState({'deleted':true}))
        //     .then(this.props.closeModal())
        //     .then(this.props.history.push(path));      
            //.then(this.props.history.push(`/boards/${this.props.boardId}`));      
        
    }
    
    // handleDelete(e) {
    //     this.props.deletePin(this.state.id)
    //         .then(() => {
    //             this.props.history.push(`/`);
    //             this.props.closeModal();
    //         })
    // }
    
    render() {
        // const display = this.state.deleted ? null : <Redirect to={`/boards/${this.props.boardId}`}></Redirect>
        //debugger
        return (
            <div className='form-buffer'>
                {/* {display} */}
                <div className='delete-form'>
                    <div className='delete-header'>
                        <p>Are you sure?</p>
                    </div>
                    <div className='delete-body'>
                        <p>Once you delete a Pin, you can't undo it!</p>
                    </div>
                    <div className='delete-footer'>
                        <button
                            className='delete-pin-cancel-button'
                            onClick={() => this.props.closeModal()} >
                            Cancel
                        </button>
                        <button
                            className={'delete-pin-button'}
                            onClick={this.handleDelete} >
                            Delete Pin
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    //debugger
    //const pinId = state.ui.currentObject;
    // {'pinId': 133,
    //   'type': 'board',
    //   'boardId': 122 }
    const pinId = state.ui.currentObject['pinId'];
    const type = state.ui.currentObject['type'];
    //const boardId = state.ui.currentObject['boardId'];
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
    // fetchBoardIdFromPinId: (pinId) => fetchBoardIdFromPinId(pinId),
});

export default withRouter(connect(msp, mdp)(DeletePinForm));
