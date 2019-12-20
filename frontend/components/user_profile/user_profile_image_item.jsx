import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    const { photo, wh } = props;
    return (
        <div className="user-profile-image-unit">
            <div className="user-profile-image-container">
                <img src={photo.photoFileUrl} alt={photo.title} 
                    className="user-profile-image" 
                    style={wh}/>
                <Link to={`/photos/${photo.id}`} className="user-profile-image-content">
                    <div className="grad" />
                    <div className="text">{photo.title}</div>
                </Link>
            </div>
        </div>
    )
}