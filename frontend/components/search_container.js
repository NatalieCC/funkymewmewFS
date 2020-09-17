//search reducer, search action
//onChange event handler in component state.
//handle submit function
//take query(string the user type into the input field) dispatch one of the action
//api util, thunk
//back end needs route /pins, need index page
//the search controller,access to user query in the params, do db lookup
//json format result, send to front end
//search result component
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from './search';
//import PinIndex from "./pins/pin_index";

const mSTP = (state, ownProps) => {
    console.log(state)
    return {
      //type: 'Search',
      matchedpins: Object.values(state.entities.search),
    };
};

const mDTP = (dispatch) => ({
  fetchSearchPins: (keyword) => dispatch(fetchSearchPins(keyword)),
});

export default withRouter(connect(mSTP, mDTP)(Search));