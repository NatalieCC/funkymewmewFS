import React from 'react';
import PinIndexItem from './pin_index_item';

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
            <div className="pin-container">
                {pins}
            </div>
        )
    }
}

export default PinFeedIndex;