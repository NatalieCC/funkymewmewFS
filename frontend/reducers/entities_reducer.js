import { combineReducers } from 'redux';
import users from './users_reducer';
import pins from './pins_reducer';
import boards from './boards_reducer';
import pinsOnBoard from './pins_on_board_reducer';

export default combineReducers({  
    pins,users,boards,pinsOnBoard
});
