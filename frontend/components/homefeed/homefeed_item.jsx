import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    const { photo, user, currentUserId } = props;
    if (photo.authorId === currentUserId) return null;
    return (
        <div className="homefeed-item">
            <div>
                <Link to={`/photos/${photo.id}`}
                    className="homefeed-item-image-container">
                    <img src={photo.photoFileUrl} alt={photo.title}/>
                </Link>
                <div className="homefeed-item-details-container">
                    <div className="homefeed-item-title-username-time">
                        <h3>{photo.title}</h3>
                        <div>
                            <p>by</p>
                            <Link to={`/users/${user.id}`}> {user.username} </Link>
                            <p>•</p>
                            <p> {photo.timeAgo} </p>
                        </div>
                    </div>
                    <Link to={`/users/${user.id}`}
                        className="homefeed-item-thumbnail">
                        <img src={window.userURL} alt={user.username} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

