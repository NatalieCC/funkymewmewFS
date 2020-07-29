import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';


class CreateBoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: {
                title: this.props.board.title || '',
                description: this.props.board.description || '',
                id: this.props.board.id,
            },
            is_public: true,
            errors: null
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //create board
    handleCancel(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    handleDelete(e) {
        this.props.deleteBoard(this.props.board.id)
            .then(this.props.closeModal())
            .then(this.props.history.push(`/${this.props.currentUser.username}`));
    }

    handleSubmit(e) {
        e.preventDefault();
        //this.props.createBoardAction(this.state.board).then(this.props.closeModal());
        //debugger
        this.props.action(this.state.board).then(this.props.closeModal())
            .then(
                () => {
                    let username = this.props.currentUser;
                    debugger
                    this.props.history.push(`/${this.props.currentUser.username}`)}
                );
    }

    update(field) {
        // debugger
        return (e) => {
            this.setState({
                board: { ...this.state.board, [field]: e.currentTarget.value }
            });
        }
    }

    displayDeleteButton() {
        if (this.props.formType === 'edit') {
            return (
                <button
                    className='rectangle-btn'
                    onClick={this.handleDelete} >
                    Delete
                </button>
            )
        } else {
            return null;
        }
    }

    displayActionButton() {
        if (this.state.name === '') {
            return (
                <button
                    className={'rectangle-btn disabled'} >
                    {this.props.buttonText}
                </button>
            )
        } else {
            return (
                <button
                    className={'rectangle-btn'}
                    onClick={this.handleSubmit} >
                    {this.props.buttonText}
                </button>
            )
        }
    }

    displayDescription() {
        if (this.props.formType === 'edit') {
            return (
                <div className='board-description'>
                    <p>Description</p>
                    <textarea
                        className='input board-description'
                        placeholder="What's your board about?"
                        value={this.state.board.description}
                        onChange={this.update('description')}
                    />
                </div>
            )
        } else {
            return null
        }
    }

    // onclick close modal
    render() {
        // debugger
        // if(!this.state.board.title) return null;
        return (
            <div className='modal-page'>
                <div className='board-form-box'>
                    <div className='form-header'>
                        <h3>{this.props.header}</h3>
                        <button
                            className='board-cancel-btn'
                            onClick={this.props.closeModal}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <form className='board-form'>
                        <div className='board-name'>
                            <p>Name</p>
                            <input
                                type="text"
                                className='input board-name'
                                placeholder="Like 'Places to Go' or 'Recipes to Make'"
                                value={this.state.board.title}
                                onChange={this.update('title')}
                            />
                        </div>
                        {this.displayDescription()}
                    </form>
                    <div className='button-footer'>
                        <div className='buttons-left'>
                            {this.displayDeleteButton()}
                        </div>
                        <div className='buttons-right'>
                            <button
                                className='rectangle-btn'
                                onClick={this.handleCancel} >
                                Cancel
                            </button>
                            {this.displayActionButton()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateBoardForm;
