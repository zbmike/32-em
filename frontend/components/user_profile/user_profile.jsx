import React from 'react';

import UserProfileImageItem from './user_profile_image_item';

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.height = 500;
        this.state = {
            width: 1024
        }
    }

    updateDimensions() {
        if (window.innerWidth === this.state.width) return;
        if (window.innerWidth < 500) {
            this.setState({ width: 450 });
        } else {
            let update_width = window.innerWidth - 100;
            this.setState({ 
                width: update_width
            });
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    alignPhotos(photos) {
        let newPhotos = Object.values(photos);
        let imgArray = [];
        let totalHeight = 0;
        while (newPhotos.length > 0) {
            let row = [];
            let nextPhoto = newPhotos.pop();
            let rowHeight = ((this.state.width - 20) * nextPhoto.height / nextPhoto.width) + 20;
            let totalWidth = nextPhoto.width;
            const refHeight = nextPhoto.height;
            row.push(nextPhoto);
            while (rowHeight > 300) {
                if (newPhotos.length === 0) {
                    rowHeight = 300;
                    break;
                }
                nextPhoto = newPhotos.shift();
                row.push(nextPhoto);
                let relativeWidth = refHeight / nextPhoto.height * nextPhoto.width;
                totalWidth = totalWidth + relativeWidth;
                rowHeight = (refHeight * (this.state.width - row.length * 20) / totalWidth) + 20;
            }
            totalHeight = totalHeight + rowHeight;
            for (let i = 0; i < row.length; i++) {
                const styleWidth = row[i].width * (rowHeight - 20) / row[i].height + 20;
                const inlineStyle = {
                    width: `${styleWidth}px`,
                    height: `${rowHeight}px`,
                    boxSizing: 'border-box',
                    padding: '10px'
                }
                imgArray.push(
                <div style={inlineStyle} key={`up-${row[i].id}`}>
                    <UserProfileImageItem photo={row[i]} />
                </div>)
            }
        }
        this.height = totalHeight;
        return imgArray;
    }

    render() {
        const { photos, user, follow, unfollow, currentUserId } = this.props;
        if (Object.keys(photos).length === 0) return null;
        const grid = this.alignPhotos(photos);

        const divStyle = {
            width: `${this.state.width}px`,
            height: `${this.height}px`
        }
        const coverStyle = {
            backgroundImage: `url(${window.location.origin}${Object.values(photos)[0].photoFileUrl})`
        }
        let followButton;
        if (currentUserId === user.id || !currentUserId) {
            followButton = null;
        } else if (user.following) {
            followButton = (
                <>
                    <a onClick={() => unfollow(user.followId)}
                        className="follow-button">Unfollow</a>
                </>)
        } else {
            followButton = (
                <>
                    <a onClick={() => follow({ followee_id: user.id, user_id: currentUserId })}
                        className="follow-button">Follow</a>
                </>)
        }
        return (
            <div className="user-profile">
                <div className="user-profile-header">
                    <div className="user-profile-cover-photo">
                        <div style={coverStyle} className="cover-image"></div>
                    </div>
                    <div className="user-profile-thumbnail-wrapper">
                        <div>
                            <div className="user-profile-thumbnail">
                                <img src={window.userURL} alt={user.username} />
                            </div>
                        </div>
                    </div>
                    <div className="user-profile-buttons">
                        {followButton}
                    </div>
                    <div className="user-profile-details">
                        <h1> {user.username} </h1>
                        <ul className="details">
                            <li>
                                <span>3</span>
                                <p>&nbsp;Followers</p>
                            </li>
                            <li>
                                <span>1</span>
                                <p>&nbsp;Following</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="user-profile-image-title">
                    <h2>PHOTOS</h2>
                    <span> {Object.keys(photos).length} </span>
                </div>
                <div style={divStyle} className="user-profile-image-grid">
                    {grid}
                </div>
            </div>
        )
    }
}