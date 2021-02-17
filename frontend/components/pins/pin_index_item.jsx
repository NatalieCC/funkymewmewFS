import React from 'react';
import { withRouter } from 'react-router-dom';

//const masonryEvents = ["load", "resize"];

class PinIndexItem extends React.Component {
  constructor(props) {
    //debugger
    super(props);
    //visible = is mouse on hover?
    this.state = { visible: false, pin: this.props.pin };
    this.turnOffVisibility = this.turnOffVisibility.bind(this);
    this.turnOnVisibility = this.turnOnVisibility.bind(this);
    this.displayLinks = this.displayLinks.bind(this);
    this.toPinShow = this.toPinShow.bind(this);

    this.showEditModal = this.showEditModal.bind(this);
    this.showSavePinOnBoardModal = this.showSavePinOnBoardModal.bind(this);
    //this.resizeGridItem = this.resizeGridItem.bind(this);
  }

  // resizeGridItem() {
  //   let item = document.getElementById(this.state.id);
  //   let grid = document.getElementById("grid");
  //   let rowHeight = parseInt(
  //     window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  //   );
  //   let rowGap = parseInt(
  //     window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  //   );
  //   let itemImg = item.querySelector(".masonry-image");
  //   let rowSpan = Math.ceil(
  //     (itemImg.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
  //   );
  //   // if (this.state.title !== '') rowSpan += 2;
  //   item.style.gridRowEnd = "span " + rowSpan;
  // }

  // componentDidMount() {
  //   setTimeout(() => this.resizeGridItem(), 1500);
  //   masonryEvents.forEach((e) =>
  //     window.addEventListener(e, this.resizeGridItem)
  //   );
  // }

  // shouldComponentUpdate(prevProps) {
  //   console.log(prevProps.pin,this.props.pin)
  //   if (prevProps.pin.title != this.props.pin.title) {
  //     debugger
  //     this.setState(this.props.pin.title);
  //   }
  // }


  turnOffVisibility(e) {
    // debugger
    this.setState({ visible: false });
  }

  //onMouseEvent update local state to update entire view
  turnOnVisibility(e) {
    // debugger
    this.setState({ visible: true });
  }

  toPinShow(e) {
    debugger
    this.props.history.push({
      pathname: `/pins/${this.props.pin.id}`,
      state: { 'pinId': this.props.pin.id, 'type': this.props.type, 'boardId': this.props.boardId }
    });
    //  return (
    //    <div>
    //       <Link
    //         to={{
    //           pathname: `/pins/${this.props.pin.id}`,
    //           state: { 'pinId': this.props.pin.id, 'type': this.props.type, 'boardId': this.props.boardId }
    //         }}>
    //       </Link>
    //   </div>
    //   )
  }

  showEditModal(e) {
    //debugger
    e.stopPropagation();
    this.props.openModal('editPin', { 'pinId': this.props.pin.id, 'type': this.props.type, 'boardId': this.props.boardId });
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
            <div className="p-links">
              <div className="top-links">
                <button className="main-save-btn" onClick={this.showSavePinOnBoardModal}>
                  Save
                </button>
              </div>
            </div>
          );
        case "Profile":
        case "Board":
          //debugger
          if (this.state.pin.user_id === this.props.currentUser.id) {
            return (
              <div className="p-links" >
                <div className="top-links">
                  <button className="main-save-btn" onClick={this.showSavePinOnBoardModal}>
                    Save
                  </button>

                  <button className="p-btn" onClick={this.showEditModal}>
                    <i className='fas fa-pencil-alt' style={{ color: "#333333" }}></i>
                  </button>
                </div>
              </div>
            )
          } else {
            return (
              <div className="p-links">
                <div className="top-links">
                  <button className="main-save-btn" onClick={this.showSavePinOnBoardModal}>
                    Save
                </button>
                </div>
              </div>
            )
          };
      }
    } else {
      return <div className="p-links"></div>;
    }
  }

  render() {
    // debugger
    return (
      // <Link to={`/pins/${this.props.pin.id}`}>
      <div className="p-index-frame"
        // id={`${this.state.id}`}
        onClick={this.toPinShow}
        onMouseEnter={this.turnOnVisibility}
        onMouseLeave={this.turnOffVisibility}
      >
        <div className="pin-index-image">
          <img src={this.state.pin.imageUrl} className="masonry-image" />
        </div>
        <div className="pin-index-title">{this.state.pin.title}</div>
        {this.displayLinks()}
      </div>
      //</Link>
    );
  }
}

export default withRouter(PinIndexItem);