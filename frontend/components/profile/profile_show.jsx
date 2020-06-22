import React from "react";
import { Link } from "react-router-dom";
import BoardIndexItem from "../boards/profile_board_index_item";


class ProfileShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: false, showing: 'boards' };
        this.displayName = this.displayName.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.showModal = this.showModal.bind(this);
        this.allowProfileNav = this.allowProfileNav.bind(this);
        this.renderBoards = this.renderBoards.bind(this);
    }

    componentDidMount() {
        // how we make things persisitant upon refresh
        //set initial local state, api call
        //const username = this.props.username;
        //const fetchUser = (userId) => this.props.fetchUser(userId);
        this.props.fetchUser(this.props.username);
        // this.props.fetchAllPins();
        // this.props.fetchBoards();
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.hideDropdown);
    }

    allowProfileNav() {
        
            return (
                <nav className="profile-nav">
                    <div className="prof-buttons prof-plus"
                        onClick={this.showDropdown}>
                        <i className="fas fa-plus p2-fas"></i>
                        {this.displayDropDown()}
                    </div>
                    <Link
                        to={`/settings`}
                        className="prof-buttons" >
                        <i className="fas fa-pen p2-fas"></i>
                    </Link>
                </nav>
            ) 
    }

    displayDropDown() {
        if (this.state.dropdown) {
            return (
                <div ref={node => this.node = node} className="profile-visible">
                    <button
                        className="dropdown-item"
                        onClick={this.showModal}
                    >
                        Create board
                    </button>
                    <Link
                        to={`/${this.props.username}/pin-builder`}
                        className="dropdown-item">
                        Create pin
                    </Link>
                </div>
            )
        }
    }

    displayName() {
        const { currentUser } = this.props;
        return currentUser.username;
    }

    profilePhoto() {
        const { currentUser } = this.props;
        if (currentUser.photo) {
            return (
                <img src={currentUser.photo} className="profile-image" />
            )
        } else {
            return (
                <i className="fas fa-user-circle" id="profile-photo" style={{ "color": "#8e8e8e" }}></i>
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

    showModal(e) {
        this.props.openModal('createBoard');
    }

    showPins(e) {
        this.setState({ showing: 'pins' })
    }

    showBoards(e) {
        this.setState({ showing: 'boards' })
    }
//{} is saying excute Javascript instead of jsx
//used forEach returns enumerable, so should use map which returns array.
//react complains if you render an object, have to key in
//passing data among functions, functins expect what we told them in the defination(pin api util vs actions), vs where we call
//the function.
//model have associatins commented back in and controller, but needs to have them in jbuilder.
    renderBoards() {
        //debugger
        //const { currentUser } = this.props;
       return this.props.boards.map((board) => {
            return (
                <BoardIndexItem board={board} pins={this.props.pins} />
            )
        })
    }

    render() {
        const { currentUser } = this.props;

        let boardsOrPinsIndex;
        if(this.state.showing === "boards") {
            boardsOrPinsIndex = this.renderBoards();
        }else {
            boardsOrPinsIndex = <h1>Pins will display here</h1>
        }
        
        return (
            <div>
                <div className="profile-buffer">
                    <div className="profile-box">
                        {this.allowProfileNav()}
                        <div className='profile-content'>
                            <div className="profile">
                                <section className="profile-body">
                                    <h2 className="profile-name">
                                        {this.displayName()}
                                    </h2>
                                    <div className="profile-follows">
                                        {/* <Link to={`/${user.username}/followers`}>
                                            {numFollowers} {followerTense}
                                        </Link>
                                        <div className='bullet'>•</div>
                                        <Link to={`/${user.username}/following`}>
                                            {numFollowing} following
                                        </Link> */}
                                    </div>
                                    
                                </section>
                                <nav className="profile-buttons">
                                    
                                    <button className="oval-link"
                                        onClick={this.showBoards.bind(this)} >
                                        Boards
                                    </button>
                                    <button className="oval-link"
                                        onClick={this.showPins.bind(this)} >
                                        Pins
                                    </button>
                                </nav>
                            </div>
                            <div className="profile-image-container">
                                { this.profilePhoto() }
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <div className="index-buffer">
                    {component}
                </div> */}
                <div className="index-buffer">
                    {boardsOrPinsIndex}
                </div>
            </div>
        )
    } 
    
    };

export default ProfileShow;