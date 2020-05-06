import React from 'react';
import { withRouter } from 'react-router-dom';
import pin_feed_container from './pin_feed_container';

class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <p>{this.props.pin.title}</p>   
                <img src={this.props.pin.imageUrl}></img>   
            </div>    
        )
    }
}

export default withRouter(PinIndexItem);