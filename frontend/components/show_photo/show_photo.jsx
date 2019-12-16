import React from 'react';

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
        const { photoFileUrl, title, timeAgo, description, category } = this.props.photo;
        const { username } = this.props.author;
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
                                <p>&nbsp;•&nbsp;</p>
                                <a>Follow</a>
                            </div>
                        </div>
                        <div className="show-photo-author-thumbnail">
                            <img src={window.userURL} alt="user"
                                />
                        </div>
                    </div>
                    <div className="show-photo-time">
                        <div className="time-icon"></div>
                        <p>{timeAgo}</p>
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

