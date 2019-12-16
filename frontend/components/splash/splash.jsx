import React from 'react';
import { Link } from 'react-router-dom'

export default props => {
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
                <div className="splash-image-unit">
                    <div className="splash-image-container">
                        <img src={ window.churchURL } alt="church"
                            className="splash-image" width="300" height="300"/>
                        <div className="splash-image-content">
                            <div className="grad" />
                            <div className="text">Photo by zbmike</div>
                        </div>
                    </div>
                </div>
                <div className="splash-image-unit">
                    <div className="splash-image-container">
                        <img src={window.pinkwallURL} alt="pinkwall"
                            className="splash-image" width="300" height="300" />
                        <div className="splash-image-content">
                            <div className="grad" />
                            <div className="text">Photo by zbmike</div>
                        </div>
                    </div>
                </div>
            </div>
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
    )
};