import React from 'react';

class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='pin-index-box'>
                <div className='pin-index-image'>
                    <img src={window.poppy} />
                </div>
                <div className="pin-index-title">{this.props.pin.title}</div>
            </div>
        )
    }
}

export default PinIndexItem;