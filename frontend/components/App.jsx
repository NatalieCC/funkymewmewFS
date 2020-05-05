import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import RegisterFormContainer from './session/register_form_container';
import SigninFormContainer from './session/signin_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
//import Modal from './modal/modal';
import SigninContainer from './greeting/signin_container';
import RegisterContainer from './greeting/register_container';
import PinFeedContainer from './pins/pin_feed_container';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={RegisterContainer} />
            <Route exact path="/signin" component={SigninContainer} />
        </Switch>
        <Switch>
            <Route path="/feed" component={PinFeedContainer} />
        </Switch>
    </div>

);


export default App;
