import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <Link to="/" className="header-link">
                <h1>Welcome to MewMewTrest</h1>
            </Link>
            <GreetingContainer />
        </header>
        <Switch>
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
        </Switch>
    </div>
);


export default App;
