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
        console.log(this.props.pins);
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

export default PinFeedIndex;