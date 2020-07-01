import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Splash from './splash';

const mSTP = (state) => {
    return ({

    });
};

const mDTP = (dispatch) => {
    return ({

    });
};

export default withRouter(connect(mSTP, mDTP)(Splash));