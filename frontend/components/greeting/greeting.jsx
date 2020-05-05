import React from 'react';
import { Link } from 'react-router-dom';
import SigninFormContainer from '../session/signin_form_container';
import RegisterFormContainer from '../session/register_form_container';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let formToRender = <RegisterFormContainer />;
        let buttonRoute = '/signin'
        if (this.props.cornerButtonText === 'register') {
            formToRender = <SigninFormContainer />;
            buttonRoute = '/';
        }
       
        return (
        <div>
            <div className="modal-transparency">
                    <Link
                        to={buttonRoute}
                        className="button-text">
                        {this.props.cornerButtonText}
                    </Link>
                    <div className="modal-child">
                        
                        {formToRender} 
                    </div>
            </div>   
        </div>
        ) 
}
}

export default Greeting;


// const Greeting = ({ currentUser, logout, openModal }) => {
//     const sessionLinks = () => (
//         <div>
//             <div className="modal-transparency">
//                 <div className="modal-child">
//                     <div className="modal-view">
//                         <h1>Welcome to MewMewTrest</h1>
//                         <div>Your Inspirations</div>
//                         {/* <div>{openModal('greeting')}</div>  */}
//                         <button onClick={() => openModal('login')}>Login</button>
//                         <button onClick={() => openModal('signup')}>Signup</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
    
//     const personalGreeting = () => (
//         <hgroup className="header-group">
//             <h2 className="header-name">Hi, {currentUser.username}!</h2>
//             <button className="header-button" onClick={logout}>Log Out</button>
//         </hgroup>
//     );

//     return currentUser ? personalGreeting() : sessionLinks();
// };



