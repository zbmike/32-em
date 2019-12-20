import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    const { photo } = props;
    return (
        <div className="photo-grid-image-unit">
            <div className="photo-grid-image-container">
                <img src={photo.photoFileUrl} alt={photo.title}
                    className="photo-grid-image" />
                <Link to={`/photos/${photo.id}`} className="photo-grid-image-content">
                    <div className="grad" />
                    <div className="text">{photo.title}</div>
                </Link>
            </div>
        </div>
    )
}