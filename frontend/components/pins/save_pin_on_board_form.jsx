import React from 'react';
import BoardList from './board_list';

class SavePinOnBoardForm extends React.Component {
    constructor(props) {
        super(props);
        const { pin } = this.props;
        this.state = {
            title: pin.title || '',
            description: pin.description || '',
            pin_id: pin.id
        };
        this.handleOnSelectBoard = this.handleOnSelectBoard.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    handleOnSelectBoard(board) {
        const pinOnBoard = {
            pin_id: this.state.pin_id,
            board_id: board.id
        }
        this.props.savePinOntoBoard(pinOnBoard).then(this.props.closeModal());
    }

    displayBoardList() {
        const boards = this.props.boards.map((board, i) => {
            return (
                <BoardList
                    onSelectBoard={this.handleOnSelectBoard}
                    board={board}
                    key={i}
                    text='Save'
                />
            )
        });

        return (
            <div className='board-scroll-container-2'>
                {boards}
            </div>
        )
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    render() {
        return (
            <div className='form-buffer'>
                <div className='boardpin-form'>
                    <div className='boardpin-header'>
                        <h3>Choose board</h3>
                        <button
                            className='board-cancel-btn-spob'
                            onClick={() => this.props.closeModal()} >
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div className='boardpin-body'>
                        <div className='boardpin-left'>
                            <img className='boardpin-pic' src={this.props.pin.imageUrl} />
                            <div className='pin-title'>
                                <textarea
                                    className='input-title'
                                    name="Pin Title"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                />
                            </div>
                        </div>
                        <div className='boardpin-right'>
                            {this.displayBoardList()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SavePinOnBoardForm;
