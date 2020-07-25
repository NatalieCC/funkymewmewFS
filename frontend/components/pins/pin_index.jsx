import React from 'react';
import PinIndexItem from './pin_index_item';
import NavbarContainer from '../navigation_bar/navbar_container';

class PinIndex extends React.Component {
    constructor(props) {
        super(props);
		//this.state = {columns: 1};
		// this.onResize = this.onResize.bind(this);
  }


    componentDidMount() {
    // debugger
		// this.props.clearPinIndex();
		// this.onResize();
    // window.addEventListener("resize", this.onResize);	
        if (this.props.type === 'Feed') {
            // debugger
            this.props.fetchPins();
        } else if (this.props.type === 'Board') {
            // fetch pins of a board
        } else if (this.props.type === 'Profile') {
            // get pins of a user from global state
        }
        
	}
	
	// getColumns(w) {
	// 	return this.props.brakePoints.reduceRight((p, c, i) => {
	// 		return c < w ? p : i;
	// 	}, this.props.brakePoints.length) + 1;
	// }

	// onResize() {
	// 	const columns = this.getColumns(this.refs.Masonry.offsetWidth);
	// 	if (columns !== this.state.columns) {
	// 		this.setState({ columns: columns });
	// 	}
	// }

	// mapChildren(){
	// 	let col = [];
	// 	const numC = this.state.columns;
	// 	for(let i = 0; i < numC; i++){
	// 		col.push([]);
	// 	}
	// 	return this.props.children.reduce((p,c,i) => {
	// 		p[i%numC].push(c);
	// 		return p;
	// 	}, col);
	// }

    render() {
        //debugger
        const pins = this.props.pins ? this.props.pins.map((pin) => {
        // const identifier = this.props.identifier;   
            return (
              <PinIndexItem
                pin={pin}
                key={pin.id}
                type={this.props.type}
                openModal={this.props.openModal}
                // identifier={identifier}
              />
            );
        }) : [];

        return (
          //   <div className="index-buffer">
          <div className="pin-index-container">
            {/* <div className="pin-index" id="grid-container">
              <div className="pin-index masonry" id="grid" ref='Masonry'> */}
                {pins}
              {/* </div> */}
            {/* </div> */}
            {/* <div className="index-buffer">{pins}</div> */}
          </div>
        );
    }
}

export default PinIndex;