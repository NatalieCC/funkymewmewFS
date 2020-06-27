import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class PinShow extends React.Component {
    constructor(props) {
        super(props)
        //debugger
        // pass in pin preview data
        this.state =  { title: '', description: '', imageUrl: '' };
        
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

    render() {
        //let pin = this.state;
        
        return (
            <div>
                <Link to='/feed'><i id='back-arrow' className="fas fa-arrow-left"></i></Link>
                <div className="show-pin-container">
                    <div className="show-pin-box">
                        <div className='show-pin-image-container'>
                            <img src={this.state.imageUrl} alt={this.state.title} />
                        </div>

                        <div className='show-pin-info-container'>
                            <header className="show-pin-header">
                                <div className="show-pin-header-right">
                                    <button className='show-pin-save'>Save</button>
                                </div>
                            </header>

                            <div className="show-pin-info">
                                <div className='show-pin-title'>{this.state.title}</div>
                                <div className='show-pin-description'>{this.state.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PinShow;

