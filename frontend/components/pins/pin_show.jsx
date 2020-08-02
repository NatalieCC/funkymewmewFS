import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class PinShow extends React.Component {
    constructor(props) {
        super(props)
        //debugger
        // pass in pin preview data
        this.state =  { title: '', description: '', imageUrl: '' };
        this.showEditModal = this.showEditModal.bind(this);
        this.showSavePinOnBoardModal = this.showSavePinOnBoardModal.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        //debugger
        // fetch pin's whole data
        this.props.fetchPin(this.props.match.params.pinId)
            //.then(pin => this.setState(this.props.pin)) 
            .then(pin => {
                //debugger
                pin = pin.payload.pin
                this.setState({
                    title: pin.title,
                    imageUrl: pin.imageUrl,
                    description: pin.description,
                    user_id: pin.user_id,
                    pin_id: pin.id,
                    username: pin.username,
                    board: pin.board
            })}) 
    }

    displayEdit() {
        //debugger
        //if(this.props.pin.user_id === this.props.currentUser.id) {
        if(this.state.user_id === this.props.currentUser.id) {
            return (
                <button
                    className='pin-show edit-pin-link'
                onClick={this.showEditModal} >
                    <i className='fas fa-pencil-alt' style={{ color: "#333333" }}></i>
                </button>
            )
        }
    }
    
    showEditModal(e) {
        //debugger
        this.props.openModal('editPin', { 'pinId': this.props.pin.id, 'type': this.props.location.state.type,'boardId': this.props.boardId });
        //this.props.openModal('editPin', this.state.pin_id);
    }

    showSavePinOnBoardModal(e) {
        this.props.openModal('savePinOnBoard', this.props.pin.id);
    }

    displayOwnername() {
        const {username} = this.state;
        if(username == this.props.currentUser.username) {
            return 'You'
        } else {
            return username;
        }
    }

    displayOwnerPhoto() {
        const {currentUser} = this.props;
        if(currentUser.photo) {
            return(
                <Link to={`/${this.props.currentUser.username}`}>
                    <img className='user-thumbnail' src={currentUser.photo} />
                </Link>
            )
        } else {
            return null;
        }
    }

    goBack(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.history.goBack();
    }

    render() {
         const {title,imageUrl,description,username,board} = this.state;
        // let userinfo;
        // if(username && board) {
        //     let displayName;
        //     if(username===this.props.currentUser.username) {
        //         displayName="You";
        //     } else {
        //         displayName=username;
        //     }
        //     userinfo = <h4>{`${displayName} added to ${board}`}</h4>
        // }
        //debugger
        //if user add a non existent pinId in url then if should handle?
        if (true) {
            return (
                <div className='pin-buffer'>
                    <a className="pin-show goback-button"
                        onClick={this.goBack}>
                        <i className="fas fa-arrow-left back-icon"></i> 
                    </a>
                    
                    <div className='pin-panel'>
                        <img className='pin-image' src={imageUrl} />
                        <div className='pin-header'>
                            <div className='pin-show nav-bar'>
                                <div>
                                    {this.displayEdit()}
                                </div>
                                <a
                                    className='pin-show save-board-pin-link'
                                    onClick={this.showSavePinOnBoardModal}>
                                    {/* <i className='fas fa-map-pin'></i> */}
                                    <div className="pin-show save-board-pin-text">Save</div>
                                </a>
                            </div>
                            <div className="pin-show info">
                                    <div className="pin-show title">{title}</div>
                                    <div className="pin-show description">{description}</div>
                            </div>
                           
                            <div className='pin-show-credit'>
                                {this.displayOwnerPhoto()}
                                <div className="pin-show credit-summary">
                                    <Link
                                        to={`/${this.props.currentUser.username}`}
                                        className="pin-show credit-link">
                                        <strong>{this.displayOwnername()}</strong>
                                    </Link>
                                    <span>&nbsp;saved to&nbsp;</span>
                                    <Link>
                                        {/* to={`/boards/${board.id}`} > */}
                                        <div className="pin-show credit-link">{`${board}`}</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}


export default withRouter(PinShow);

