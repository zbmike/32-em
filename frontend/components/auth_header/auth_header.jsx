import React from 'react';
import { Link } from 'react-router-dom';

class AuthHeader extends React.Component {

    render() {
        const { currentUser, logout } = this.props;
        const elements = currentUser ?
            (
                <>
                    <img src="" alt="user_thumbnail"/>
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
                    <svg></svg>
                    <svg></svg>
                    <Link>Upload</Link>
                </>
            ) :
            (
                <>
                    <Link to='/login'>Log in</Link>
                    <Link to='/signup'>Sign Up</Link>
                </>
            )
        return (
            <div>{elements}</div>
        )
    }
}
export default AuthHeader;

