import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({ currentUser, logout }) => {

return (
    <header>
        <nav>
            <ul className="navbar">
                <Link to='/'><h1><img src={window.logo} className="small-logo"/></h1></Link>
                <Link to="/"><p className="navbar-home">Home</p></Link>
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
            
                <p><button className='logout-button' onClick={logout}>Log Out</button></p>
            </ul>
        </nav>
    </header>
)
}

export default navBar;