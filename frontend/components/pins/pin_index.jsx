import React from 'react';
import PinIndexItem from './pin_index_item';
import NavbarContainer from '../navigation_bar/navbar_container';

class PinIndex extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        // debugger
        this.props.clearPinIndex();
        if (this.props.type === 'Feed') {
            // debugger
            this.props.fetchPins();
        } else if (this.props.type === 'Board') {
            // fetch pins of a board
        } else if (this.props.type === 'User') {
            // fetch pins of a user
        }
        
    }

    render() {
        
        const pins = this.props.pins ? this.props.pins.map((pin) => {
            
            return <PinIndexItem

                pin={pin}
                key={pin.id}
                 />
        }) : [];

        return (
            <div>
                <NavbarContainer/>
                <div className="pin-container">
                    {pins}
                </div>
            </div>
        )
    }
}

export default PinIndex;