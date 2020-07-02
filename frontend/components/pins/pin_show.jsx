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
                pin = pin.pin.pin
                this.setState({
                    title: pin.title,
                    imageUrl: pin.imageUrl,
                    description: pin.description,
                
            })}) 
    }

    displayEdit() {
        //debugger
        if(this.props.pin.user_id === this.props.currentUser.id) {
            return (
                <button
                className='prof-buttons'
                onClick={this.showEditModal} >
                    <i className= 'fas fa-pen p2-fas'></i>
                </button>
            )
        }
    }
    showEditModal(e) {
        this.props.openModal('editPin', this.props.pin.id);
    }

    showSavePinOnBoardModal(e) {
        this.props.openModal('savePinOnBoard', this.props.pin.id);
    }


    render() {
        const { pin } = this.props;
        const { board } = this.props;

        if (pin) {
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
                        <h3>{pin.title}</h3>
                        <img className='pin-image' src={pin.imageUrl} />
                        {/* {this.displayLink()} */}
                        <h5>{pin.description}</h5>
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


export default PinShow;

