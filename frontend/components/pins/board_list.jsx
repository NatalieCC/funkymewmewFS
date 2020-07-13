import React from 'react';

class BoardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.turnOffVisibility = this.turnOffVisibility.bind(this);
        this.turnOnVisibility = this.turnOnVisibility.bind(this);
        this.displayLinks = this.displayLinks.bind(this);
        this.handleBoard = this.handleBoard.bind(this);
    }

    turnOffVisibility(e) {
        this.setState({ visible: false });
    }

    turnOnVisibility(e) {
        this.setState({ visible: true });
    }

    handleBoard(e) {
        this.props.onSelectBoard(this.props.board);
    }

    displayLinks() {
        if (this.state.visible) {
            return (
                <button
                    className='select-btn'
                    onClick={this.handleBoard}>
                    {this.props.text}
                </button>
            )
        }
    }

    render() {
        const { board } = this.props;

        return (
            <div
                className='board-option'
                onMouseEnter={this.turnOnVisibility}
                onMouseLeave={this.turnOffVisibility}
                value={board.id}>
                <p>{board.title}</p>
                {this.displayLinks()}
            </div>
        )
    }
}

export default BoardList;
