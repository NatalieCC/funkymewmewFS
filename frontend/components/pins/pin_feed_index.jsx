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

    addPin() {
        //make a pin form component has this method
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
                {pins}
            </div>
        )
    }
}

export default PinFeedIndex;