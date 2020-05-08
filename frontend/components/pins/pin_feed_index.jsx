import React from 'react';
import PinIndexItem from './pin_index_item';
import NavbarContainer from '../navigation_bar/navbar_container';

class PinFeedIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //    //?????????????????
        // };
        //this.addPin = this.addPin.bind(this);
    }


    componentDidMount() {
        this.props.fetchPins();
    }

    render() {
        const pins = this.props.pins.map((pin, idx) => {
            return <PinIndexItem
                pin={pin}
                key={idx}
                 />
        });

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

export default PinFeedIndex;