import React from 'react';
import { Link } from 'react-router-dom';

class AuthHeader extends React.Component {

    render() {
        const { currentUser, logout } = this.props;
        const elements = currentUser ?
            (
                <>
                    <img src={window.userURL} alt={currentUser.username}
                        className="user-thumb"/>
                    <div className="user-dropdown hidden">
                        <ul>
                            <li><Link>Profile</Link></li>
                            <li><Link>Stats</Link></li>
                            <li><Link>Galleries</Link></li>
                            <li><Link>Liked photos</Link></li>
                            <li><Link>Manage Photos</Link></li>
                            <li><Link>Licensing Manager</Link></li>
                        </ul>
                        <br/>
                        <ul>
                            <li><Link>Memberships</Link></li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Support</Link></li>
                            <li><button onClick={logout}>Log out</button></li>
                        </ul>
                    </div>
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

