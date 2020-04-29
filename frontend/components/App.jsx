import React from 'react';
import { Provider } from 'react-redux';
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

const App = () => (
    <div>
        <header>
            <h1>Mew Mew Trest</h1>
           
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;
