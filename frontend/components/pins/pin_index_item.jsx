import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const masonryEvents = ["load", "resize"];

class PinIndexItem extends React.Component {
  constructor(props) {
    //debugger
    super(props);
    this.state = { visible: false };
    this.turnOffVisibility = this.turnOffVisibility.bind(this);
    this.turnOnVisibility = this.turnOnVisibility.bind(this);
    this.displayLinks = this.displayLinks.bind(this);
    this.toPinShow = this.toPinShow.bind(this);

    this.showEditModal = this.showEditModal.bind(this);
    //debugger set here page then get stuck forever why?
    this.showSavePinOnBoardModal = this.showSavePinOnBoardModal.bind(this);

    this.resizeGridItem = this.resizeGridItem.bind(this);
  }

    resizeGridItem() {
      let item = document.getElementById(this.state.id);
      let grid = document.getElementById("grid");
      let rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
      );
      let rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      );
      let itemImg = item.querySelector(".masonry-image");
      let rowSpan = Math.ceil(
        (itemImg.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
      );
      // if (this.state.title !== '') rowSpan += 2;
      item.style.gridRowEnd = "span " + rowSpan;
    }

  componentDidMount() {
    setTimeout(() => this.resizeGridItem(), 1500);
    masonryEvents.forEach((e) =>
      window.addEventListener(e, this.resizeGridItem)
    );
  }

  turnOffVisibility(e) {
    // debugger
    this.setState({ visible: false });
  }

  turnOnVisibility(e) {
    // debugger
    this.setState({ visible: true });
  }

  toPinShow(e) {
    //console.log("to pin show");
    this.props.history.push(`/pins/${this.props.pin.id}`);
  }

  showEditModal(e) {
    //debugger
    e.stopPropagation();
    this.props.openModal("editPin", this.props.pin.id);
  }

  showSavePinOnBoardModal(e) {
    //debugger
    e.stopPropagation();
    this.props.openModal('savePinOnBoard', this.props.pin.id);
  }

  displayLinks() {
    // debugger
    if (this.state.visible) {
      switch (this.props.type) {
        case "Feed":
          return (
            <div className="p-links visible">
              {/* need link url for pin  */}
              <div className="top-links">
                <button className="save-btn" onClick={this.showSavePinOnBoardModal}>
                  {/* <i className="fas fa-map-pin"></i> */}
                  <p>Save</p>
                </button>
              </div>
            </div>
          );
        case "Profile":
        case "Board":
          return (
            <div className="p-links visible" >
              <div className="top-links">
                <button className="save-btn" onClick={this.showSavePinOnBoardModal}>
                  {/* <i className="fas fa-map-pin"></i> */}
                  <p>Save</p>
                </button>
                <button className="p-btn" onClick={this.showEditModal}>
                  <i className="fas fa-pen"></i>
                </button>
              </div>
            </div>
          );
      }
    } else {
      return <div className="p-links"></div>;
    }
  }

  render() {
    // debugger
    return (
      // <Link to={`/pins/${this.props.pin.id}`}>
      <div
        // className="pin-index-box"
        className={`p-index-frame`}
        // id={`${this.state.id}`}
        onClick={this.toPinShow}
        onMouseEnter={this.turnOnVisibility}
        onMouseLeave={this.turnOffVisibility}>
        <div className="pin-index-image">
          <img src={this.props.pin.imageUrl} className="masonry-image" />
        </div>
        <div className="pin-index-title">{this.props.pin.title}</div>
        {this.displayLinks()}
      </div>
      //</Link>
    );
  }
}

export default withRouter(PinIndexItem);