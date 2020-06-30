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
import SigninContainer from './greeting/signin_container';
import RegisterContainer from './greeting/register_container';
import PinFeedContainer from './pins/pin_feed_container';
import PinShowContainer from './pins/pin_show_container';
import NavbarContainer from './navigation_bar/navbar_container';
import Modal from './modal/modal';
import ProfileShowContainer from "./profile/profile_show_container";
import ProfileEditContainer from "./profile/profile_edit_container";
import BoardPinContainer from "./boards/board_pin_container";
import PinCreateContainer from "./pins/pin_create_container";

const App = () => (
    <div>
        <Modal />
        <Switch>    
            <Route exact path="/" component={RegisterContainer} />
            <Route exact path="/" component={NavbarContainer} />
            <Route exact path="/signin" component={SigninContainer} />
            <Route exact path="/settings" component={ProfileEditContainer} />
            <ProtectedRoute exact path="/feed" component={() => <div><NavbarContainer /><PinFeedContainer/></div>} />
            <ProtectedRoute exact path="/boards/:boardId" component={() => <div><NavbarContainer /><BoardPinContainer /></div>} />
            <ProtectedRoute exact path='/pins/:pinId' component={ () => <div><NavbarContainer /><PinShowContainer /></div> } />
            {/* <ProtectedRoute exact path="/:username" component={ProfileShowContainer} /> */}
            <ProtectedRoute exact path="/:username" component={() => <div><NavbarContainer /><ProfileShowContainer /></div>} />
            <ProtectedRoute exact path="/:username/build-pin" component={() => <div><NavbarContainer /><PinCreateContainer /></div>} />
        </Switch>
    </div>

);

export default App;
