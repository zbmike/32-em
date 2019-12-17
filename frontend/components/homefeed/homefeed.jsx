import React from 'react';
import HomefeedItem from './homefeed_item';

class Homefeed extends React.Component {
    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {
        const { users, photos, currentUserId } = this.props;
        const items = Object.values(photos).map( photo => {
            return (<HomefeedItem user={users[photo.authorId]}
                photo={photo} currentUserId={currentUserId}
                key={`hi-${photo.id}`}/>)
        })

        return (
            <div className="homefeed">
                <div className="homefeed-title">
                    <h2>Home Feed</h2>
                </div>
                <div className="homefeed-items-container">
                    {items}
                </div>
            </div>
        )
    }
}

export default Homefeed;