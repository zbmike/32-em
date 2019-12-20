import React from 'react';
import HomefeedItem from './homefeed_item';
import { debounce } from 'lodash';


import PhotoGrid from '../splash/photo_grid';

class Homefeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            limit: 15
        }
        window.onscroll = debounce(() => {
            const { loading, hasMore } = this.props;
            if (loading || !hasMore) return;
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                this.loadPhotos();
            }
        }, 100)
    }

    loadPhotos() {
        const { offset, limit } = this.state;
        this.props.setLoading();
        this.props.fetchPhotos()
            .then(() => this.props.fetchMorePhotos({ offset, limit }))
            .then(() => {
            this.setState({
                offset: offset + 15
            });
            this.props.setFinished();
        })
    }

    componentDidMount() {
        this.props.clearInfPhotos();
        this.loadPhotos();
    }

    render() {
        const { users, photos, currentUserId, infPhotos } = this.props;
        if (Object.keys(users).length === 0) return null;
        const items = Object.values(photos).reverse().map( photo => {
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
                {(infPhotos.length > 0) ? (<><div className="homefeed-title">
                <h2>Recommendeded photos</h2>
                </div>
                <PhotoGrid photos={infPhotos} /></>):null}
            </div>
        )
    }
}

export default Homefeed;