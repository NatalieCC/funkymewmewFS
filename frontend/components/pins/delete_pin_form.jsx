import React from 'react';

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
            .then(this.props.history.push(`/feed`))
        } else if (this.props.type == 'Profile') {
            this.props.deletePin(this.props.pinId)
            .then(this.props.closeModal())
            .then(this.props.history.push(`/${this.props.username}/pins`))
        }
        // if(this.props.type == 'Board') {
            else {
            debugger 
            const pinOnBoard = {
                pin_id: this.props.pinId,
                board_id: this.props.boardId,
            }
            this.props.deletePinOnBoard(pinOnBoard)
                .then(this.props.closeModal())
                .then(this.props.history.go(0))
                //.then(< Link to = {`/boards/${this.props.boardId}`} replace />)
                // .then(this.props.history.push(`/boards/${this.props.boardId}`))           
        }
        
        // this.props.deletePin(this.props.pinId)
        //     // .then(this.setState({'deleted':true}))
        //     .then(this.props.closeModal())
        //     .then(this.props.history.push(path));      
            //.then(this.props.history.push(`/boards/${this.props.boardId}`));      
        
    }
    
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

export default DeletePinForm;
