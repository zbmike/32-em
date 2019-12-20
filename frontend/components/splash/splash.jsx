import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

import PhotoGrid from './photo_grid';
 
export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            limit: 15
        }
        window.onscroll = debounce(() => {
            const {loading, hasMore} = this.props;
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
        const {offset, limit} = this.state;
        this.props.setLoading();
        this.props.fetchPhotos({offset, limit}).then(() =>{
            this.setState({offset: offset + 15
            });
            this.props.setFinished();
        })
    }

    componentDidMount() {
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
            <PhotoGrid photos={this.props.photos}/>
            <footer className="footer">
                <div className="cr-logo">&copy; 32em</div>
                <div className="footer-links">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/zhiyuan-he-mike">LinkedIn</a></li>
                        <li><a href="https://github.com/zbmike">GitHub</a></li>
                        <li><a href="/">My Site</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )};
}