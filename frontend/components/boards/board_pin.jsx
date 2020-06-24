import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';


class BoardPin extends React.Component {
    constructor(props) {
        super(props);
        //debugger
        this.state = {dropdown: false};
        this.showDropdown = this.showDropdown.bind(this);
        this.editBoardModal = this.editBoardModal.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
    }

    componentDidMount() {
        //debugger
        // this.props.fetchPinsOnBoards(this.props.boardId);
        this.props.fetchBoard(this.props.boardId);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.hideDropdown);
    }

    //create and edit pin nav
    allowBoardNav() {
            return (
                <nav className='profile-nav'>
                    <div className='prof-buttons prof-plus'
                        onClick={this.showDropdown} >
                        <i className='fas fa-plus p2-fas'></i>
                        {this.displayDropDown()}
                    </div>

                    <button
                        className='prof-buttons'
                        onClick={this.editBoardModal}> 
                        <i className='fas fa-pen p2-fas'></i>
                    </button>
                </nav>   
        )
    }

    
    displayDropDown() {
        if (this.state.dropdown) {
            return (
                <div ref={node => this.node = node} className='profile-visible'>
                    <Link
                        to={`/${this.props.username}/build-pin`}
                        className='create-pin-dropdown'>
                        Create pin
                    </Link>
                </div>
            )
        }
    }

    hideDropdown(e) {
        if (!this.node.contains(e.target)) {
            this.setState({ dropdown: false });
            document.removeEventListener('mousedown', this.hideDropdown);
        }
    }

    showDropdown(e) {
        this.setState({ dropdown: true });
        document.addEventListener('mousedown', this.hideDropdown);
    }

    //Edit board modal pops out
    editBoardModal(e) {
        //debugger
        this.props.openModal('editBoard', this.props.boardId);
    }

    render() {
        //debugger
        const { board } = this.props;
        if(!board) return null;
        //const count = (board) ? board.pin_join_ids.length : '0';
        //const pinTense = (count === 1) ? 'Pin' : 'Pins';

        //if (board) {
            return (
                <div>
                    
                    <div className='profile-buffer'>
                        <div className='profile-box'>
                            <div className='profile'>
                                {this.allowBoardNav()}
                                <section className='profile-body'>
                                    <h2 className='profile-name'>
                                        {board.title}
                                    </h2>
                                    <div className='profile-follows'>
                                        <h4>{this.props.board.pin_ids.length} pins</h4>
                                    </div>
                                    <div className='profile-description'>
                                        {board.description}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className='index-buffer'>
                        {/* <PinBoardIndexContainer
                            creator={this.props.creator}
                            board={this.props.board} */}
                        {/* /> */}
                    </div>
                </div>
            )
        // } else {
        //     return (
        //         <div></div>
        //     )
        //     }  
    }
};


export default BoardPin;
