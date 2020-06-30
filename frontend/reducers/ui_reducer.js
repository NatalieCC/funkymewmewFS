import { combineReducers } from 'redux';
//import filters from './filters_reducer';
import modal from './modal_reducer';
import currentObject from "./current_object_reducer";

export default combineReducers({
  //filters,
  modal,
  currentObject
});