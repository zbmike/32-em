import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.setState({
            username: "",
            password: ""
        }));
    }

    updateState(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            });
        };
    }

    render() {
        const buttonText = (this.props.formType === "login") ? 
            "Log In" : "Sign Up";
        const link = (this.props.formType === "login") ? 
            (<div><p>Don't have an account?</p>
              <Link to="/signup">Sign up</Link></div>) : 
            (<div><p>Already have an account?</p>
              <Link to="/login">Log in</Link></div>)

        return (
            <form>
                <h3>{this.props.headerText}</h3>
                <p>{this.props.para}</p>
                <label htmlFor="username">Email or Username*</label>
                <input type="text" 
                       onChange={this.updateState("username")} 
                       value={this.state.username} 
                       id="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" 
                       onChange={this.updateState("password")} 
                       value={this.state.password} 
                       id="password" />
                <button onClick={this.handleSubmit}>{buttonText}</button>
                {link}
            </form>
        )
    }
}

export default SessionForm;