import * as UserAPIUtil from '../util/user_api_util';


// action types
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
//export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

// action creators
const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

const receiveUser = payload => ({
    type: RECEIVE_USER,
    payload: payload
});

// const receiveUserErrors = errors => ({
//     type: RECEIVE_USER_ERRORS,
//     errors
// });

// thunk action creators
export const fetchAllUsers = () => dispatch => (
    UserAPIUtil.fetchAllUsers()
        .then(users => dispatch(receiveUsers(users)))
);

export const fetchUser = id => dispatch => (
    UserAPIUtil.fetchUser(id)
        .then(payload => dispatch(receiveUser(payload)))
);

export const updateUser = (user, id) => dispatch => (
    UserAPIUtil.updateUser(user, id).then(
        user => dispatch(receiveUser(user)),
        //err => dispatch(receiveUserErrors(err.responseJSON))
    )
);