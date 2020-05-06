import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PinFeedIndex from './pin_feed_index';
import { fetchAllPins } from '../../actions/pin_actions';


const mSTP = (state) => {
    return(
         {pins: Object.values(state.entities.pins)}
    )       
};

const mDTP = dispatch => ({
    fetchPins: (page) => dispatch(fetchAllPins(page)),
});

export default withRouter(connect(mSTP, mDTP)(PinFeedIndex));
