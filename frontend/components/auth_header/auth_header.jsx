import React from 'react';
import { Link } from 'react-router-dom';

class AuthHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown_open: false };
        this.dropdownRef = React.createRef();
        this.switched = true;
    }

    clickDropdown() {
        this.setState({
            dropdown_open: !this.state.dropdown_open
        });
    }

    closeDropdown() {
        this.setState({
            dropdown_open: false
        });
    }

    handleDropdownBlur(ref) {
        return e => {
            if (!ref.current.contains(e.relatedTarget)) {
                this.closeDropdown();
            }
        }
    }

    render() {
        const { currentUser, logout } = this.props;
        const { dropdown_open } = this.state;
        if (currentUser && this.switched) {
            this.switched = false;
            this.state.dropdown_open = false;
        };
        const dropdown = (
            <div className="user-dropdown"
            ref={this.dropdownRef} >
                <ul className={dropdown_open ? "user-dropdown-ul show" :"user-dropdown-ul"}>
                    <li><Link to="/">Profile</Link></li>
                    <li><Link to="/">Galleries</Link></li>
                    <li><Link to="/">Liked photos</Link></li>
                    <li><Link to="/">Manage Photos</Link></li>
                    <li><button onClick={logout}>Log out</button></li>
                </ul>
            </div>
        );
        const elements = currentUser ?
            (
                <>
                    <div 
                        className="user-thumb"
                        onBlur={this.handleDropdownBlur(this.dropdownRef)}
                        onClick={() => this.clickDropdown()}
                        tabIndex="0">
                        <img src={window.userURL} alt={currentUser.username} />
                    </div>
                    {dropdown}
                    <a className="messenger"/>
                    <a className="notifications" />
                    <Link className="upload-button" to="/photos/upload">
                        <div className="upload-arrow"></div><span>Upload</span></Link>
                </>
            ) :
            (
                <>
                    <Link to='/login' className="auth-login">Log in</Link>
                    <Link to='/signup' className="auth-signup">Sign Up</Link>
                </>
            )
        return (
            <div className="auth-header">{elements}</div>
        )
    }
}
export default AuthHeader;

