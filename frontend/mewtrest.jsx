import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
    let store;
    //debugger
    // window.test0 = "test0"
    if (window.currentUser) {
        //debugger
        const preloadedState = { 
            session: { currentUserId: window.currentUser }, 
            entities: { users: { [window.currentUser.username] : window.currentUser } }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // debugger
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});