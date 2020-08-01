import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import PinOnBoardContainer from '../pins/pin_on_board_container';

//user profile click into one board
class BoardPin extends React.Component {
    constructor(props) {
        super(props);
        //debugger
        this.state = {dropdown: false, pins: null};
        this.showDropdown = this.showDropdown.bind(this);
        this.editBoardModal = this.editBoardModal.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.boardId)
        .then(() => this.setState({pins: this.props.pins }));
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.hideDropdown);
    }
//if props changed for the component, then the below will run.
//we still have accesss to previous props
//when user change the url, we are getting the boardId from the url(look at board_pin_container line11)
//so the boardId changes. that triggers CDU (when any props change). and this will
//show the corresponding pins of the new boardId we put in the url.

    componentDidUpdate(prevProps) {
        //check if it is the boardId thats been changed
        if(this.props.boardId !== prevProps.boardId) {
            this.props.fetchBoard(this.props.boardId)
            .then(() => this.setState({ pins: this.props.pins }));
        }
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
                        <i className='fas fa-pencil-alt' style={{ color: "#8E8E8E" }}></i>
                    </button>
                </nav>   
        )
    }

    
    displayDropDown() {
        if (this.state.dropdown) {
            return (
                <div ref={node => this.node = node} className='profile-visible'>
                    <Link
                        to={`/${this.props.currentUser.username}/build-pin`}
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
        debugger
        const { board } = this.props;
        if(!board) return null;
        if(!this.state.pins) return null;
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
                        <PinOnBoardContainer 
                        pins={this.state.pins}
                        //type={this.props.type}
                        boardId={this.props.boardId}
                        />
                            {/* creator={this.props.creator}
                            board={this.props.board} */} 
                         
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
