import React from "react";
import { connect } from "react-redux";
import ProfileEditForm from "./profile_edit_form";
import { updateUser } from "../../actions/user_actions";

const mapStateToProps = state => ({
    errors: state.errors.user,
    currentUser: state.session.currentUserId,
});

const mapDispatchToProps = dispatch => ({
    updateUser: (user, id) => dispatch(updateUser(user, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm);