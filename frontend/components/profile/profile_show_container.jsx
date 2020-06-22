import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { fetchBoards } from "../../actions/board_actions";
import { fetchAllPins } from "../../actions/pin_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import ProfileShow from "./profile_show";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        //currentUser: state.entities.users[state.session.currentUserId],
        currentUser: state.session.currentUserId,
       // users: Object.values(state.entities.users),
        username: ownProps.match.params.username,
        //take the boards from the redux store
        boards: Object.values(state.entities.boards),
        // boardsPins: state.entities.boardsPins,
        pins: Object.values(state.entities.pins)
    }
};

const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    //fetchBoards: () => dispatch(fetchBoards()),
    //page is same thing
    //fetchAllPins: (page) => dispatch(fetchAllPins(page)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileShow));