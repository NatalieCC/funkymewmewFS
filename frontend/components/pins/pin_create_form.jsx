import React from 'react';

class PinCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: { pin_id: '', description: '', link_url: '', title: '' },
            boardscroll: false,
            chooseFile: false,
            
            photoFile: null,
            photoUrl: null,
            photoError: null,
            photoType: null,
        };
        this.goBack = this.goBack.bind(this);
        //this.handleBoard = this.handleBoard.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('pin[title]', this.state.pin.title);
        formData.append('pin[description]', this.state.pin.description);
        formData.append('pin[link_url]', this.state.pin.link_url);
        formData.append('pin[picture]', this.state.photoFile);
        formData.append('pin[row_height]', this.state.row_height);
        
        this.props.createPin(formData, this.state.boardId)
        .then( () => this.props.history.push(`/boards/${this.state.boardId}`)
        );
    }

    // handleBoard(board) {
    //     this.setState({ boardId: board.id, category: board.title });
    //     //this.hideBoardScroll();
    // }

    // displayBoardScroll() {
    //     if(this.state.boardscroll) {
    //         const boards = this.props.boards.map((board,i) => {
    //             return(
    //                 <SelectBoard
    //                 onSelectBoard={this.handleBoard}
    //                 board={board}
    //                 key={i}
    //                 text='Select'
    //                 />
    //             )
    //         });

    //         return (
    //             <div className='board-scroll-container'>
    //                 {boards}
    //             </div>
    //         )
    //     }
    // }

    goBack(e) {
        e.preventDefault();
        this.props.history.goBack();
    }

    render() {
        const { pin } = this.state;

        return (
            <div className='pin-form-buffer'>
                <div className='pin-form-box'>
                    <div className='pin-form-header'>
                        <button
                            className='back-btn'
                            onClick={this.goBack}>
                            <i className="fas fa-chevron-left"></i>
                            
                        </button>
                        <div className='save-btn' onClick={this.handleSubmit} >
                            <button className='save-btn'>Save</button>
                        </div>
                    </div>
                    <div className='pin-form'>
                        <div className='pin-form-left'>
                            

                            <div className='upload-box'>
                                <div className='upload-outline'>
                                    <button className='upload-btn'>
                                        <i className='fas fa-arrow-circle-up'></i>
                                    </button>
                                    <p>Click to upload</p>
                                    <input type="file"
                                        
                                        >
                                    </input>
                                    <div className="upload-footer">
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='pin-form-content'>
                            <div className='pin-title'>
                                <textarea className='pin-title'
                                    type="text"
                                    placeholder='Add your title'
                                    
                                    value={this.state.title}
                                    //onChange={this.update('title')}
                                    />
                            </div>

                            <div className='pin-description'>
                                <textarea
                                    placeholder='Tell everyone what your Pin is about'
                                    //onChange={this.update('description')}
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
                    
                </div>
            </div>
        )
    }

}

export default PinCreateForm;