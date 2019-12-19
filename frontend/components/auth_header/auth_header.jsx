import React from 'react';
import { Link } from 'react-router-dom';

class AuthHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown_open: false };
        this.dropdownRef = React.createRef();
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
        const { currentUser, logout, openModal } = this.props;
        if (!currentUser) this.state.dropdown_open = false;
        const { dropdown_open } = this.state;
        const dropdown = currentUser ? (
            <div className="user-dropdown"
            ref={this.dropdownRef} >
                <ul className={dropdown_open ? "user-dropdown-ul show" :"user-dropdown-ul"}>
                    <li><Link to={`/users/${currentUser.id}`}
                        onClick={()=> this.closeDropdown()}>Profile</Link></li>
                    <li><Link to="/">Galleries</Link></li>
                    <li><Link to="/">Liked photos</Link></li>
                    <li><Link to="/">Manage Photos</Link></li>
                    <li><button onClick={logout}>Log out</button></li>
                </ul>
            </div>
        ) : null;
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
                    {/* <a className="messenger"/>
                    <a className="notifications" /> */}
                    <a className="upload-button" onClick={openModal}>
                        <div className="upload-arrow"></div><span>Upload</span></a>
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

