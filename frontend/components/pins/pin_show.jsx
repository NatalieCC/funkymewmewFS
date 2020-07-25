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
            })}) 
    }

    displayEdit() {
        //debugger
        //if(this.props.pin.user_id === this.props.currentUser.id) {
        if(this.state.user_id === this.props.currentUser.id) {
            return (
                <button
                className='prof-buttons'
                onClick={this.showEditModal} >
                    <i className='fas fa-pencil-alt' style={{ color: "#333333" }}></i>
                </button>
            )
        }
    }
    showEditModal(e) {
        //debugger
        this.props.openModal('editPin', { 'pinId': this.props.pin.id, 'type': this.props.location.state.type });
        //this.props.openModal('editPin', this.state.pin_id);
    }

    showSavePinOnBoardModal(e) {
        this.props.openModal('savePinOnBoard', this.props.pin.id);
    }


    render() {
        //const { pin } = this.props;
        const {title,imageUrl,description} = this.state;
        const { board } = this.props;
        //debugger
        //if user add a non existent pinId in url then if should handle?
        if (true) {
            return (
                <div className='pin-buffer'>
                    <div className='pin-panel'>
                        <div className='pin-header'>
                            <div>
                                {this.displayEdit()}
                            </div>
                            <button
                                className='save-btn'
                                onClick={this.showSavePinOnBoardModal}>
                                {/* <i className='fas fa-map-pin'></i> */}
                                <p>Save</p>
                            </button>
                        </div>
                        <h3>{title}</h3>
                        <img className='pin-image' src={imageUrl} />
                        {/* {this.displayLink()} */}
                        <h5>{description}</h5>
                        <div className='pin-footer'>
                            {/* {this.displayOwnerPhoto()} */}
                            {/* <Link */}
                                {/* to={`/${pin.owner.username}`}> */}
                                {/* {this.displayOwnername()} */}
                            {/* </Link> */}
                            {/* <p>saved to</p> */}
                            {/* <Link
                                to={`/boards/${board.id}`}>
                                {board.title}
                            </Link> */}
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

