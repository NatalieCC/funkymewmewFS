import React from 'react';

class EditPinForm extends React.Component {
  constructor(props) {
    super(props);
    const { pin } = this.props;
    this.state = {
      pin: {
        id: pin.id,
        //board_id: pin.board_id,
        description: pin.description || '',
        title: pin.title || '',
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openDeletePin = this.openDeletePin.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ pin: { ...this.state.pin, [field]: e.target.value } });
    };
  }

  openDeletePin(e) {
    //this.props.openModal('deletePin', this.props.pin.id);
    this.props.openModal('deletePin', { 'pinId': this.props.pin.id, 'type': this.props.type, 'boardId': this.props.boardId});
  }

  handleSubmit(e) {
    //debugger
    e.preventDefault();
    this.props.updatePin(this.state.pin)
    // .then(this.props.closeModal());
    .then(() => document.location.reload());
  }

  displayPhoto() {
    if (this.state.photoUrl) {
      return (
        <div className="preview-picture" >
          <img src={this.state.imageUrl} />
        </div>
      )
    }
  }
  

  render() {
    const { pin } = this.state;
    if (pin) {
      return (
        <div className='pin-edit-buffer'>
          <div className='pin-form-box'>
            <div className='pin-header'>
              <h3>Edit this Pin</h3>
            </div>
            <div className='pin-form-body'>
              <div className='pin-aside'>
                <div className='pin-title'>
                  <p>Title</p>
                  <textarea
                    className='input'
                    name="Pin Title"
                    value={this.state.pin.title}
                    onChange={this.update('title')}
                  />
                </div>
                <div className='pin-description'>
                  <p>Description</p>
                  <textarea
                    className='input'
                    placeholder="What's your pin about?"
                    value={this.state.pin.description}
                    onChange={this.update('description')}
                  />
                </div>
              </div>
              <div className='pin-image'>
                <img src={this.props.pin.imageUrl}/>
              </div>
            </div>
            <div className='button-footer'>
              <div className='buttons-left'>
                <button
                  className='rectangle-btn'
                  onClick={this.openDeletePin} >
                  Delete
                </button>
              </div>
              <div className='buttons-right'>
                <button
                  className='rectangle-btn'
                  onClick={() => this.props.closeModal()} >
                  Cancel
                </button>
                <button
                  className={'rectangle-btn'}
                  onClick={this.handleSubmit} >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default EditPinForm;
