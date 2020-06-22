import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";


const errorsReducer = combineReducers({
    session: sessionErrorsReducer
    // pin: pinSerror

});

export default errorsReducer;
