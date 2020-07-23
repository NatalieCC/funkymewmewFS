import React from "react";
import { Link, NavLink } from "react-router-dom";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        //this.state = this.props.currentUser;
    }
    
    // componentDidUpdate(prevProps) {
    //     console.log(prevProps,this.props)
    //     if(prevProps.currentUser.photo != this.props.currentUser.photo) {
    //         this.setState(this.props.currentUser);
    //     }
    // }

    render() {
        const { currentUser, logout } = this.props;
        // const { logout } = this.props;
        // const currentUser = this.state;
    
        const profilePhoto = (currentUser && currentUser.photo) ? (
            <img src={currentUser.photo} alt="profile-pic" id="profile-icon-main" />
        ) : (
                //<i className="fas fa-user-circle" id="profile-icon" style={{ "color": "#8e8e8e" }}></i>
                <div className="profile-icon">{currentUser.username[0].toUpperCase()}</div>
            );
        
        return !currentUser ? (
            null
        ) : (
                <div className="nav-bar-background">
                    <div className="nav-bar-wrapper">
                        <header className="nav-bar-container">

                            <div className="nav-bar-button" id="home">
                                <Link to="/feed" className="nav-bar-link">
                                    <div className="icon-container-shadow">
                                        <div className="icon-container">
                                            <img src={window.logo} id="home-icon"></img>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="nav-bar-search-container" id="search">
                                <div className="search-container">
                                    <div className="search-icon-container">
                                        <i className="fas fa-search" id="search-icon"></i>
                                    </div>
                                    <div className="search-input-container">
                                        <input className="search-input" type="text" placeholder="Search" />
                                    </div>
                                </div>
                            </div>

                            <div className="right-nav-bar">

                                <div className="nav-bar-button" id="following">
                                    <NavLink to="/following" className="nav-bar-link">
                                        <div className="icon-container-shadow">
                                            <div className="icon-container">
                                                <i className="fas fa-user-friends" id="following-icon"></i>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>

                                <div className="nav-bar-button" id="profile">
                                    <NavLink to={`/${currentUser.username}`} className="nav-bar-link">
                                        <div className="icon-container-shadow">
                                            <div className="icon-container">
                                                <div id="profile-icon-frame">
                                                    {profilePhoto}
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>

                                <div className="nav-bar-spacer" id="spacer"></div>

                                <div className="nav-bar-button" id="github">
                                    <a href="" target="_blank" className="nav-bar-link">
                                        <div className="icon-container-shadow">
                                            <div className="icon-container">
                                                <i className="fab fa-github-square" id="networking-icon"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="nav-bar-button" id="linkedin">
                                    <a href="" target="_blank" className="nav-bar-link">
                                        <div className="icon-container-shadow">
                                            <div className="icon-container">
                                                <i className="fab fa-linkedin" id="networking-icon"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="nav-bar-button" id="options">
                                    <Link to="/" className="nav-bar-link" onClick={logout}>
                                        <div className="icon-container-shadow">
                                            <div className="icon-container">
                                                <i className="fas fa-sign-out-alt" id="options-icon"></i>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            )
    }
}

export default NavBar;

{/* 
</div><p>{currentUser.username}</p> not working in above
//<Link to="/feed"><p className="navbar-home">{currentUser.username}</p></Link> 
//<Link to='/feed'><img src={window.logo} className="small-logo"/></Link> */}



