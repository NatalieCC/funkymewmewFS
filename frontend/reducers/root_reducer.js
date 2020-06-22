import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';

// state.entities, state.session, state.errors, state.ui
const rootReducer = combineReducers({
    entities,
    session,  
    errors,
    ui,
});

export default rootReducer;