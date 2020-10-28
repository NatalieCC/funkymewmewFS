import React from 'react';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        //below is loca state. keep track on its on of what user types in.
        //global state = redux store
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        // this.state = props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearErrors = this.handleClearErrors.bind(this);
        //this.demoLogin = this.demoLogin.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this._disableInputs = this._disableInputs.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        //debugger;
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push("/feed"));
    }

    handleClearErrors(e) {
        e.preventDefault();
        //debugger
        this.props.clearSessionErrors();
    }
    componentDidMount() {
       // debugger
        this.props.clearSessionErrors();
    }

    renderErrors() {
        return (
            <div>
                
                {this.props.errors.map((error, i) => <div className="l-err"
                     key={`error-${i}`}>
                        {error}
                    </div>

                )}
            </div>
        );
    }



    handleDemo(e) {
        e.preventDefault();

        let email = "jerry@greattom.com";
        let password = "888888";

        //this._disableInputs();

        this.setState({ email: "", password: "" }, () =>
            this._autoInput("email", email, () =>
                this._autoInput("password", password, () => {
                    const demoUser = Object.assign({}, this.state);
                    this.props.demoLogin(demoUser)
                        .then(() => this.props.history.push("/feed"))       
                })
            )
        )
    }

    _disableInputs() {
        document.getElementById("email").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("form-action").disabled = true;
        document.getElementById("demo-login").disabled = true;
    }

    _autoInput(field, text, callback) {
        const inputChars = text.split("");

        const _addChar = (chars) => {
            if (chars.length > 0) {
                let char = chars.shift();
                let currentInput = this.state[field];
                this.setState(
                    { [field]: (currentInput + char) },
                    () => setTimeout(() => { _addChar(chars) }, 60)
                )
            } else {
                callback()
            }
        }
        _addChar(inputChars);
    }

    render() {
       
        return (
            <div className="login-form-container">
                <div className="form-box">
                    <div className="logo-box">
                        <img src={window.logobear} className="small-logo" />
                    </div>     
                    <h1 className="shimmer">Welcome to MewTrest</h1>
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
                            {this.props.formType !== "Sign Up" ?
                                <button className="demo-btn" onClick={this.handleDemo}>
                                    Demo Login
                                </button>
                                : null
                            }
                            </div>
                         </form>
            </div>
            </div>
        );
    }
}

export default SessionForm;
