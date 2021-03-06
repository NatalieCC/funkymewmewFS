import React from 'react';
import BoardList from './board_list';
import { Redirect } from 'react-router-dom';
import Dropzone from "react-dropzone";

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: { pin_id: "", description: "", link_url: "", title: "" },

      photoFile: null,
      photoPreview: null,
      photoError: null,

      boardscroll: false,
      chooseFile: false,
      boardChoice: "select",

      pageOnClick: false,
    };

    this.goBack = this.goBack.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.handleBoard = this.handleBoard.bind(this);
    this.showBoardList = this.showBoardList.bind(this);
    this.displayUploadBox = this.displayUploadBox.bind(this);

    this.deleteImage = this.deleteImage.bind(this);

    this.changeInput = this.changeInput.bind(this);
    this.hideBoardScroll = this.hideBoardScroll.bind(this);
    this.changeInput = this.changeInput.bind(this);

    this.handleClickOnPage = this.handleClickOnPage.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  handleClickOnPage(e) {
    this.setState({ pageOnClick: true });
  }

  uploadImage(e) {
    debugger
    e.stopPropagation();
    //e.stopImmediatePropagation();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoPreview: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  displayPhoto() {
    //debugger
    if (this.state.photoPreview) {
      return (
        <div className="preview-picture">
          <img src={this.state.photoPreview} />

          <div className="delete-image-button-container">
            <button id="delete-image-button" onClick={this.deleteImage}>
              <div id="trash-icon-container">
                <i className="fas fa-trash" id="trash-icon"></i>
              </div>
            </button>
          </div>
        </div>
      );
    }
  }

  displayUploadBox() {
    if (!this.state.photoPreview) {
      return (
        <div className="upload-box">
          <div className="upload-outline">
            <button className="upload-btn">
              <i className="fas fa-arrow-circle-up"></i>
            </button>
            <p>Drag and drop or Click to upload</p>
            <input type="file" onChange={this.uploadImage} className='input-area'></input>
            <div className="upload-footer">
              Recommendation: Use high-quality .jpg files less than 2 MB
            </div>
          </div>
        </div>
      );
    }
  }

  deleteImage(e) {
    e.stopPropagation();
    this.setState({ photoPreview: null });
  }

  handleSave(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pin[title]", this.state.pin.title);
    formData.append("pin[description]", this.state.pin.description);
    formData.append("pin[link_url]", this.state.pin.link_url);
    formData.append("pin[image]", this.state.photoFile);
    formData.append("pin[row_height]", this.state.row_height);
    formData.append("board_id", this.state.boardId);
    formData.append("pin[user_id]", this.props.currentUser.id);
    debugger;
    this.props
      .createPin(formData, this.state.boardId)
      .then(() => this.props.history.push(`/boards/${this.state.boardId}`));
  }

  hideBoardScroll(e) {
    this.setState({ boardscroll: false });
  }

  handleBoard(board) {
    this.setState({ boardId: board.id, boardChoice: board.title });
    this.hideBoardScroll();
  }

  showBoardList(e) {
    this.setState({ boardscroll: true });
  }

  //to display a view,return of a function 这function就变成了什么。
  //whoever called this function can get such view.
  displayBoardScroll() {
    if (this.state.boardscroll) {
      const boards = this.props.boards.map((board, i) => {
        return (
          <BoardList
            onSelectBoard={this.handleBoard}
            board={board}
            key={i}
            text="Select"
          />
        );
      });

      return <div className="board-scroll-container">{boards}</div>;
    }
  }

  goBack(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  changeInput(field) {
    //debugger
    return (e) => {
      // below is like merge
      let newState = Object.assign({}, this.state.pin);
      newState[field] = e.currentTarget.value;
      //debugger
      // return this.setState({ pin:  {newState}  })
      //above is equal to {newState: newState}
      return this.setState({ pin: newState });
    };
    // return (e) => {
    //     this.setState({
    //         pin: { ...this.state.pin, [field]: e.currentTarget.value }
    //     });
  }

  onDrop(acceptedFile, _, event) {
    event.stopPropagation();
    const file = acceptedFile[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoPreview: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  render() {
    const { pin } = this.state;

    const clickSave = this.state.boardId === null ? null : this.handleSave;
    const refresh = this.state.pageOnClick ? (
      <Redirect to={`${this.props.currentUser.username}/build-pin`} />
    ) : null;
    return (
      <>
        {refresh}
        {/* <div className='page'></div> */}
        <div className="pin-form-buffer">
          <div className="pin-form-box">
            <div className="pin-form-header">
              <button className="back-btn" onClick={this.goBack}>
                <i className="fas fa-chevron-left" id="back"></i>
              </button>
              <div className="right-header">
                <div className="board-choices" onClick={this.showBoardList}>
                  <div className="select-board-label">
                    {this.state.boardChoice}
                  </div>
                  <div className="arrow-down">
                    <i className="fas fa-chevron-down" id="dropdown-icon"></i>
                  </div>
                </div>
                <div
                  className="create-pin"
                  id="save-button"
                  onClick={clickSave}
                >
                  <div className="create-pin" id="save-button-label">
                    Save
                  </div>
                </div>
                {this.displayBoardScroll()}
              </div>
            </div>
            <div className="pin-form">
              <Dropzone onDrop={this.onDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()} className="pin-form-left">
                    <input {...getInputProps()} />
                    {this.displayPhoto()}
                    {this.displayUploadBox()}
                  </div>
                )}
              </Dropzone>

              <div className="pin-form-content">
                <div className="pin-title-container">
                  <textarea
                    className="pin-title"
                    type="text"
                    placeholder="Add your title"
                    value={this.state.title}
                    onChange={this.changeInput("title")}
                  />
                </div>

                <div className="pin-description">
                  <textarea
                    placeholder="Tell everyone what your Pin is about"
                    onChange={this.changeInput("description")}
                  ></textarea>
                </div>

                <div className="pin-url">
                  <textarea
                    placeholder="Add a destination link"
                    onChange={this.changeInput("link_url")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PinCreateForm;