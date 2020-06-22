import React from 'react';
import { Link } from 'react-router-dom';

class PinIndexItem extends React.Component {
    constructor(props) {
        // debugger
        super(props);
    }

    render() {
        // debugger
        return (
            <Link to={`/pins/${this.props.pin.id}`}>
                <div className='pin-index-box'>
                    <div className='pin-index-image'>
                        <img src={this.props.pin.imageUrl} />
                    </div>
                    <div className="pin-index-title">{this.props.pin.title}</div>
                </div>
            </Link>
        )
    }
}

export default PinIndexItem;