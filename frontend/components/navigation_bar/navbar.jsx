import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({ currentUser, logout }) => {
return (
    <header>
        <nav>
            <ul className="navbar">
                <Link to='/feed'><img src={window.logo} className="small-logo"/></Link>
                <Link to="/feed"><p className="navbar-home">Home</p></Link>
                <Link to="/feed"><p className="navbar-home">Following</p></Link>         
                <p className="search">
                    <input
                        className="search-text"
                        type="text"
                        placeholder="what is on your mind?"
                    />
                    <i className="fas fa-search" aria-hidden="true"></i>
                </p>
                <p className='navbar-notification'><i className="fas fa-bell"></i></p>
                <p className='navbar-inbox'><i className="fas fa-comment-dots"></i></p> 
                <p className="navbar-home">Hi,{currentUser.username}</p>      
                <p><button className='logout-button' onClick={logout}>Log Out</button></p>
            </ul>
        </nav>
    </header>
)
}

export default navBar;

//<p>{currentUser.username}</p> not working in above
//<Link to="/feed"><p className="navbar-home">{currentUser.username}</p></Link> 