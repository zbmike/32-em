import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.props.clearSessionErrors();
        this.state = {
            user: {
                username: "",
                password: ""
            },
            valid: {
                username: true,
                password: true
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {user} = this.state;
        const userValid = Boolean(user.username);
        const passValid = Boolean(user.password);
        const allValid = userValid && passValid;
        if (allValid) {
            const formUser = Object.assign({}, this.state.user);
            this.props.processForm(formUser).then(() => this.setState({
                user: {username: "",
                password: ""}
            }), () => setTimeout(this.props.clearSessionErrors, 4000));

        } else {
            this.setState({
                user,
                valid: {
                    username: userValid,
                    password: passValid
                }
            })
        }
    }

    demoLogin(e) {
        e.preventDefault();
        const user = { username: "zbmike", password:"123456"}
        this.props.processForm(user);
    }

    updateState(type) {
        return (e) => {
            const {user, valid} = this.state;
            user[type] = e.target.value;
            valid[type] = true;
            this.setState({
                user,
                valid
            });
        };
    }

    render() {
        const {formType, headerText, para, errors} = this.props;
        const buttonText = (formType === "login") ? 
            "Log In" : "Sign Up";
        const link = (formType === "login") ? 
            (<div className="session-form-footer"><p>Don't have an account? </p>
              <Link to="/signup">Sign up</Link></div>) : 
            (<div className="session-form-footer"><p>Already have an account? </p>
              <Link to="/login">Log in</Link></div>)
        const type = (formType === "login") ? "session-form login" : "session-form signup";
        const errorList = (
            <div className="error-popup"><div><ul>
                {errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul></div></div>
        ) 
        const demo = (<button onClick={this.demoLogin}>Demo Login</button>)

        return (
            <div>
                <form className={type} onSubmit={this.handleSubmit}>
                    <h3>{headerText}</h3>
                    <p>{para}</p>
                        <label htmlFor="username">Email or Username*</label>
                        <input type="text" 
                            onChange={this.updateState("username")} 
                            value={this.state.username} 
                            id="username"
                            className={this.state.valid.username ? "" : "error-input"}/>
                        <span className="error-message">{this.state.valid.username ? "" :"This field is required."}</span>
                        <label htmlFor="password">Password*</label>
                        <input type="password" 
                            onChange={this.updateState("password")} 
                            value={this.state.password} 
                            id="password" 
                            className={this.state.valid.password ? "": "error-input"}/>
                        <span className="error-message">{this.state.valid.password ? "" :"This field is required."}</span>
                    <button onClick={this.handleSubmit}>{buttonText}</button>
                    {formType === 'login' && demo}
                    {link}
                </form>
            {errors.length > 0 && errorList}
            </div>
        )
    }
}

export default SessionForm;