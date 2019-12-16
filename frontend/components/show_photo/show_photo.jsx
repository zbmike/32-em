import React from 'react';

class ShowPhoto extends React.Component {

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId);
    }

    render() {
        if (!this.props.photo) return null;
        const { photoFileUrl, title } = this.props.photo;
        const { username } = this.props.author;
        return (
            <div>
                <div className="show-photo-image-container">
                    <img className="show-photo-image" src={photoFileUrl} 
                        alt={title}/>
                </div>
                <h2>{title}</h2>
                <p>by { username }</p>
                <a>Follow</a>
            </div>
        )
    }
}

export default ShowPhoto;