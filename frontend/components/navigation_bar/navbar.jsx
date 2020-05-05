import React from 'react';
import { Redirect, Link, NavLink } from 'react-router-dom';
import SearchBarContainer from '../search_bar/searchBarContainer';

class navBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        
        return (
            <div className="navbar">
                <NavLink to="/" ><img className="nav-logo" src={window.logo} /></NavLink>
                <div className="right-nav">
                    <NavLink exact to="/" className='homelink'>Home</NavLink>
                    <NavLink
                        to={`/users/${this.props.currentId}`}
                        className='profile-link'>{userImg}<p className='username'>{username}</p>
                    </NavLink>
                    <a className="logout-button" onClick={() => this.props.logout()}>Log Out</a>
                </div>
            </div>
        );
    }
}

export default navBar;