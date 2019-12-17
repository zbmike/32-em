import React from 'react';
import { follow } from '../../util/follows_api_util';

class ShowPhoto extends React.Component {

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId);
    }

    render() {
        if (!this.props.photo) return null;
        const categories = [
            "Uncategorized",
            "Abstract",
            "Aerial",
            "Animals",
            "Black and White",
            "Boudoir",
            "Celebrities",
            "City &amp; Architecture",
            "Commercial",
            "Concert",
            "Concert",
            "Family",
            "Fashion",
            "Film",
            "Fine Art",
            "Food",
            "Journalism",
            "Landscape",
            "Macro",
            "Nature",
            "Night",
            "Nude",
            "People",
            "Performing Arts",
            "Sports",
            "Still Life",
            "Street",
            "Transportation",
            "Travel",
            "Underwater",
            "Urban Exploration",
            "Wedding"
        ]
        const { photoFileUrl, title, timeAgo, description, category, location } = this.props.photo;
        const { username, id: photoAuthorId, following, followId } = this.props.author;
        const { currentUserId, follow, unfollow } = this.props;

        let followButton
        if (currentUserId === photoAuthorId || !currentUserId) {
            followButton = null;
        } else if (following) {
            followButton = (
                <>
                    <p>&nbsp;•&nbsp;</p>
                    <a onClick={() => unfollow(followId)}>Unfollow</a>
                </> )
        } else {
            followButton = ( 
                <>
                    <p>&nbsp;•&nbsp;</p>
                    <a onClick={()=> follow({followee_id: photoAuthorId, user_id: currentUserId})}>Follow</a>
                </> )
        }
        return (
            <div className="show-photo">
                <div className="show-photo-image-container">
                    <div className="show-photo-image-wrapper">
                        <img className="show-photo-image" src={photoFileUrl} 
                            alt={title}/>
                    </div>
                </div>
                <div className="show-photo-details-container">
                    <div className="show-photo-author-container">
                        <div className="show-photo-author-section">
                            <h2 className="show-photo-title">{title}</h2>
                            <div className="show-photo-author">
                                <p>by { username } </p>
                                {followButton}
                            </div>
                        </div>
                        <div className="show-photo-author-thumbnail">
                            <img src={window.userURL} alt="user"
                                />
                        </div>
                    </div>
                    <div className="show-photo-loc-time">
                        <div className="show-photo-location">
                            <div className="location-icon"></div>
                            <p>{location}</p>
                        </div>
                        <div className="show-photo-time">
                            <div className="time-icon"></div>
                            <p>{timeAgo}</p>
                        </div>
                    </div>
                    <div className="show-photo-description">
                        <p>{ description }</p>
                    </div>
                    <div className="show-photo-category">
                        <h3>Category</h3>
                        <p>{ categories[parseInt(category, 10)-1] }</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowPhoto;

