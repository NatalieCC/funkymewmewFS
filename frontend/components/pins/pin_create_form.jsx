import React from 'react';

class PinCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: { pin_id:'', descripttion: '', title: ''},
            category: 'Choose a board (required)',
        };

        //this.handleBoard = this.handleBoard.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    // handleBoard(board) {
    //     this.setState({ boardId: board.id, category: board.title });
    //     //this.hideBoardScroll();
    // }

    render() {
        const { pin } = this.state;

        return (
            <div className='pin-form-buffer'>
                <div className='pin-form-box'>
                    <div className='pin-form-header'>
                        <button
                            className='oval-btn'
                            onClick={this.goBack}>
                            <i className="fas fa-chevron-left"></i>
                            <p>Back</p>
                        </button>
                        <button
                            className='save-btn'
                            onClick={this.handleSubmit} >
                            <i className='fas fa-map-pin'></i>
                            <p>Save</p>
                        </button>
                    </div>
                    <div className='pin-form'>
                        <div className='pin-form-left'>
                            {/* {this.displayPhoto()} */}
                            {/* {this.displayExternalFileForm()} */}
                            <div className='upload-box'>
                                <div className='upload-outline'>
                                    <button className='upload-btn'>
                                        <i className='fas fa-arrow-circle-up'></i>
                                    </button>
                                    <p>Click to upload</p>
                                    <input type="file"
                                        // onChange={this.handleUploadFile.bind(this)}
                                        >
                                    </input>
                                    <div className="upload-footer">
                                        {/* {this.displayFooter()} */}
                                    </div>
                                </div>
                            </div>
                            <div
                                className='save-from-site'
                                // onClick={this.showChooseFile}
                                >
                                <p>Save from site</p>
                            </div>
                        </div>
                        <div className='pin-form-content'>
                            <div className='pin-title'>
                                <textarea
                                    placeholder='Add your title'
                                    // onChange={this.update('title')}
                                    >
                                </textarea>
                            </div>

                            <div className='pin-description'>
                                <textarea
                                    placeholder='Tell everyone what your Pin is about'
                                    // onChange={this.update('description')}
                                    >
                                </textarea>
                            </div>

                            <div className='pin-url'>
                                <textarea
                                    placeholder='Add a destination link'
                                    // onChange={this.update('link_url')}
                                    >
                                </textarea>
                            </div>
                            <div
                                className='board-choices'
                                onClick={this.showBoardScroll} >
                                <p>{this.state.choiceDialogue}</p>
                                <div className='arrow-down'>
                                    <i className='fas fa-chevron-down'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {this.displayBoardScroll()} */}
                </div>
            </div>
        )
    }

}

export default PinCreateForm;