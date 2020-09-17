import React from 'react';
import PinIndexItem from './pins/pin_index_item';
//import PinIndex from './pins/pin_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    let pins = "";
    //debugger
    //console.log(this.props);
    if (this.props.matchedpins) {
      pins = this.props.matchedpins.map((pin) => (
        <PinIndexItem
          pin={pin}
          key={pin.id}
          type={this.props.type}
          openModal={this.props.openModal}
          boardId={this.props.boardId}
          currentUser={this.props.currentUser}
        />
      ));
    }
    return <div className="pin-index-container">{pins}</div>;
  }
}

export default Search;