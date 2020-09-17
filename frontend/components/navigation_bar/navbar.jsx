import React from "react";
import { Link, NavLink } from "react-router-dom";
//import Search from "../search";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {searchWord: ""}
    this.onKeyUp = this.onKeyUp.bind(this);
    this.debounce = this.debounce.bind(this);
  }

   //componentDidUpdate(prevProps) {
  //     console.log(prevProps,this.props)
  //     if(prevProps.currentUser.photo != this.props.currentUser.photo) {
  //         this.setState(this.props.currentUser);
  //     }
       
   //}
  onKeyUp(e) {
    //debugger;
    e.preventDefault();
    if (e.key !== "Enter") {
      this.setState({ searchWord: e.currentTarget.value });
      this.props.fetchSearchPins(this.state.searchWord);
      //this.props.history.push("/search");
      //below redierects you so your cursor will be out of the input field
      this.props.history.push({
        pathname: "/search",
        state: { searchWord: e.currentTarget.value },
      });
    } else {
      $(".search-input").val("");
      this.setState({ searchWord: "" });
    }
  }

  debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
  
  render() {
    const { currentUser, logout } = this.props;
    // const { logout } = this.props;
    // const currentUser = this.state;

    const profilePhoto =
      currentUser && currentUser.photo ? (
        <img src={currentUser.photo} alt="profile-pic" id="profile-icon-main" />
      ) : (
        //<i className="fas fa-user-circle" id="profile-icon" style={{ "color": "#8e8e8e" }}></i>
        <div className="profile-icon">
          {currentUser.username[0].toUpperCase()}
        </div>
      );

    return !currentUser ? null : (
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
                  <input
                    className="search-input"
                    id="si"
                    type="text"
                    value={this.state.searchWord}
                    onChange={(e) => this.debounce(this.onKeyUp(e),250)}
                    placeholder="Search"
                  />
                  {/* <Search/> redner the search results inside navbar */}
                </div>
              </div>
            </div>

            <div className="right-nav-bar">
              <div className="nav-bar-button" id="profile">
                <NavLink
                  to={`/${currentUser.username}`}
                  className="nav-bar-link"
                >
                  <div className="icon-container-shadow">
                    <div className="icon-container">
                      <div id="profile-icon-frame">{profilePhoto}</div>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="nav-bar-spacer" id="spacer"></div>

              <div className="nav-bar-button" id="github">
                <a
                  href="https://github.com/NatalieCC"
                  target="_blank"
                  className="nav-bar-link"
                >
                  <div className="icon-container-shadow">
                    <div className="icon-container">
                      <i
                        className="fab fa-github-square"
                        id="networking-icon"
                      ></i>
                    </div>
                  </div>
                </a>
              </div>

              <div className="nav-bar-button" id="linkedin">
                <a
                  href="https://www.linkedin.com/in/nataliecake/"
                  target="_blank"
                  className="nav-bar-link"
                >
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
    );
  }
}

export default NavBar;

{/* 
</div><p>{currentUser.username}</p> not working in above
//<Link to="/feed"><p className="navbar-home">{currentUser.username}</p></Link> 
//<Link to='/feed'><img src={window.logo} className="small-logo"/></Link> */}



