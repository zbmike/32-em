import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PhotoGrid from './photo_grid_limited';
 
export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            limit: 15
        }        
    }

    loadPhotos() {
        const {offset, limit} = this.state;
        this.props.setLoading();
        this.props.fetchPhotos({offset, limit}).then(() =>{
            this.setState({offset: offset + 15
            });
            this.props.setFinished();
        })
    }

    componentDidMount() {
        this.props.clearInfPhotos();
        this.loadPhotos();
    }
    
    render() {
    return (
        <div>
            <div className="splash-1">
                <div className="splash-1-content">
                    <div>
                        <h1>Discover and share the world's best photos</h1>
                        <p>Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads—just great photography.</p>
                    </div>
                    <Link to="/signup">Sign up</Link>
                </div>
                <div className="splash-1-mask"></div>
            </div>
            <div className="splash-2">
                <div className="homefeed-title">
                    <h2>Checkout the lastest photos from our photographers</h2>
                </div>
            </div>
            <PhotoGrid photos={this.props.photos}/>
            <footer className="footer">
                <div className="cr-logo">&copy; 32em</div>
                <div className="footer-links">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/zhiyuan-he-mike">LinkedIn</a></li>
                        <li><a href="https://https://angel.co/zhiyuan-he-2">AngelList</a></li>
                        <li><a href="https://github.com/zbmike">GitHub</a></li>
                        <li><a href="https://zbmike.dev">My Site</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )};
}