import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearErrors = this.handleClearErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push("/feed"));
    }

    handleClearErrors(e) {
        e.preventDefault();
        this.props.clearSessionErrors();
    }
    componentDidMount() {
        this.props.clearSessionErrors();
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    demoLogin(e) {
        e.preventDefault();
        this.setState({
            username: "poppy",
            email: "poppy@aa.com",
            password: "123321"
        },()=>{
            this.props.processForm(this.state) 
                .then(() => this.props.history.push("/feed"))
        })
    }

    render() {
       
        return (
            <div className="login-form-container">
                <div className="form-box">
                    <div className="logo-box">
                        <i id="logo" className="fas fa-cat-space"></i>
                        <img src={window.logo} className="small-logo" />
                    </div>     
                    <h1>Welcome to MewMew Trest</h1>
                    <div>Your Inspirations</div>
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <div onClick={this.props.closeModal} ></div>
                            {this.renderErrors()}
                            <div className="session-form"> 
                                {
                                this.props.formType === "Sign Up" ?
                                <label>
                                        <input placeholder="Username" 
                                        type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="login-input"
                                    />
                                </label> 
                                    : null
                                }
                                <label>
                                        <input placeholder="Email"
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="login-input"
                                    />
                                </label>        
                                <label>
                                        <input placeholder="Password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="login-input"
                                    />
                                </label>
                            <button className="session-submit" type="submit" value={this.props.formType}>{this.props.formType}</button>
                                <button className="demo-btn" onClick={this.demoLogin}>
                                    Demo Login
                                </button>
                            </div>
                         </form>
            </div>
            </div>
        );
    }
}

export default SessionForm;
