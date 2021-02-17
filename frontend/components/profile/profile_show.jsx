import React from "react";
import { Link } from "react-router-dom";
import BoardIndexItem from "../boards/profile_board_index_item";
import PinProfileIndexContainer from '../pins/pin_profile_index_container';

class ProfileShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: false, showing: 'boards' };
        this.displayName = this.displayName.bind(this);
        this.displayDescription = this.displayDescription.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.showModal = this.showModal.bind(this);
        this.allowProfileNav = this.allowProfileNav.bind(this);
        this.renderBoards = this.renderBoards.bind(this);
    }

    componentDidMount() {
        //debugger
        // how we make things persisitant upon refresh
        // set initial local state, api call
        // const username = this.props.username;
        // const fetchUser = (userId) => this.props.fetchUser(userId);
        this.props.fetchUser(this.props.username);
        // const username = this.props.match.params.username;
        // const fetchUser = (username) => this.props.fetchUser(username);

        // this.props.fetchAllUsers()
        //     .then(res => {
        //         const user = Object.values(res.users).find(user => user.username === username);
        //         return fetchUser(user.id);
        //     })

    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.hideDropdown);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.username !== this.props.username) {
            this.props.fetchUser(this.props.username);
        }
    }

    allowProfileNav() {
        if (this.props.currentUser.username === this.props.username) {
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
                        <i className="fas fa-pencil-alt" style={{ color: " #8E8E8E" }}></i>
                    </Link>
                </nav>
            )
        } else {
            return (
                <div className="profile-nav-guest">
                </div>
            )
        }
    }

    displayDropDown() {
        if (this.state.dropdown) {
            // debugger
            return (
                <div ref={node => this.node = node} className="profile-visible">
                    <button
                        className="dropdown-item"
                        onClick={this.showModal}>
                        Create board
                    </button>
                    <Link
                        to={`/${this.props.username}/build-pin`}
                        className="dropdown-item">
                        Create pin
                    </Link>
                </div>
            )
        }
    }

    displayName() {
        return this.props.username;
    }

    displayDescription() {
        const { user } = this.props;
        if (user.location && user.description) {
            return [user.location, user.description].join(" • ");
        } else if (user.location) {
            return user.location;
        } else if (user.description) {
            return user.description;
        } else {
            return null;
        }
    }

    profilePhoto() {
        //debugger
        if (this.props.location && this.props.location.state) {
            return <img src={this.props.location.state.photo} className="profile-image" />
        }
        const { user } = this.props;
        if (user.photo) {
            return (
                <img src={user.photo} className="profile-image" />
            )
        } else {
            //debugger 
            return (
                <div className="profile-name-initial" >
                    <div className="initial"> {this.props.user.username[0].toUpperCase()} </div>
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

    showModal(e) {
        this.props.openModal('createBoard');
    }

    showPins(e) {
        //this.setState({ showing: 'pins' })
        this.props.history.push(`/${this.props.username}/pins`)
    }

    showBoards(e) {
        //this.setState({ showing: 'boards' })
        this.props.history.push(`/${this.props.username}`)
    }
    //{} is saying excute Javascript instead of JSX
    //used forEach returns enumerable, so should use map which returns an array.
    //React complains if you render an object, have to key in
    //passing data among functions, functins expect what we told them in the defination(pin api util vs actions), vs where we call
    //the function.
    //model have associatins commented back in and controller, but needs to have them in jbuilder.
    renderBoards() {
        return (this.props.boards.map((board, i) => {
            return (
                <BoardIndexItem key={i} board={board} pins={this.props.pins} />
            )
        })
        )
    }

    renderPins() {
        return (
            <div className="index-buffer">
                <div className="pin-index">
                    <PinProfileIndexContainer />
                </div>
            </div>
        )
    }

    render() {
        if (!this.props.user) {
            //debugger
            return null;
        }

        //const { currentUser } = this.props;
        let boardButton = 'link-selected';
        let pinButton = '';
        let boardsOrPinsIndex;
        //if(this.state.showing === "boards") {
        if (this.props.path !== "/:username/pins") {
            //pinButton = '';
            boardsOrPinsIndex = this.renderBoards();
        } else {
            boardButton = '';
            pinButton += 'link-selected';
            boardsOrPinsIndex = this.renderPins();
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
                                        <h4>{`0 followers • 0 following`}</h4>
                                    </div>

                                    <h4 className="profile-description">
                                        {this.displayDescription()}
                                    </h4>
                                </section>

                                <nav className="profile-buttons">
                                    <button
                                        className={boardButton + ' oval-link'}
                                        onClick={this.showBoards.bind(this)} >
                                        Boards
                                    </button>
                                    <button
                                        className={pinButton + ' oval-link'}
                                        onClick={this.showPins.bind(this)} >
                                        Pins
                                    </button>
                                </nav>
                            </div>
                            <div className="profile-image-container">
                                {this.profilePhoto()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="index-buffer">
                    <div className='board-index'>
                        {boardsOrPinsIndex}
                    </div>
                </div>
            </div>
        )
    }

};

export default ProfileShow;

//<div> grabElementbyId
//.classList.add .classList.remove
//eventListner when an item gets clicked use above to manipulate CSS