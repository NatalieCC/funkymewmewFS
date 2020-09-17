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
import SplashContainer from './splash_container';
import SearchContainer from './search_container';

const App = () => (
    <div>
        <Modal />
        <Switch>   
            <ProtectedRoute exact path="/search" component={ composeComponents(NavbarContainer,SearchContainer)} /> 
            <Route exact path="/" component={composeComponents(RegisterContainer,SplashContainer)} />
            <Route exact path="/" component={NavbarContainer} />
            <Route exact path="/signin" component={composeComponents(SigninContainer,SplashContainer)} />
            <Route exact path="/settings" component={ProfileEditContainer} />
            <ProtectedRoute exact path="/feed" component={composeComponents(NavbarContainer,PinFeedContainer)} />
            <ProtectedRoute exact path="/boards/:boardId" component={composeComponents(NavbarContainer,BoardPinContainer)} />
            <ProtectedRoute exact path='/pins/:pinId' component={ composeComponents(NavbarContainer,PinShowContainer)} />
            <ProtectedRoute exact path="/:username" component={composeComponents(NavbarContainer,ProfileShowContainer)} />
            <ProtectedRoute exact path="/:username/pins" component={composeComponents(NavbarContainer,ProfileShowContainer)} />
            <ProtectedRoute exact path="/:username/build-pin" component={composeComponents(NavbarContainer,PinCreateContainer)} />    
        </Switch>
    </div>
);

const composeComponents = (...components) => {
  return () => (
    <div>
      {components.map((Component, index) => (
        <Component key={`comp-${index}`} />
      ))}
    </div>
  );
};

export default App;
