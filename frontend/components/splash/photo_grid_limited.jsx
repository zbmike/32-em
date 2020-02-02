import React from 'react';

import PhotoGridItem from './photo_grid_item';

export default class PhotoGrid extends React.Component {
    constructor(props) {
        super(props);
        this.height = 400;
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
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    alignPhotos(photos) {
        let newPhotos = photos.slice();
        let imgArray = [];
        let totalHeight = 0;
        let rows = 0;
        while (rows < 3) {
            let row = [];
            let nextPhoto = newPhotos.pop();
            let rowHeight = ((this.state.width - 20) * nextPhoto.height / nextPhoto.width) + 20;
            let totalWidth = nextPhoto.width;
            const refHeight = nextPhoto.height;
            row.push(nextPhoto);
            while (rowHeight > 400) {
                if (newPhotos.length === 0) {
                    rowHeight = 400;
                    break;
                }
                nextPhoto = newPhotos.pop();
                row.push(nextPhoto);
                let relativeWidth = refHeight / nextPhoto.height * nextPhoto.width;
                totalWidth = totalWidth + relativeWidth;
                rowHeight = (refHeight * (this.state.width - row.length * 20) / totalWidth) + 20;
            }
            rows++;
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
                        <PhotoGridItem photo={row[i]} wh={{
                            width: `${styleWidth-20}px`,
                            height: `${rowHeight-20}px`,}}/>
                    </div>)
            }
        }
        this.height = totalHeight;
        return imgArray;
    }

    render() {
        const { photos } = this.props;
        if (photos.length === 0) return null;
        const grid = this.alignPhotos(photos);
        const divStyle = {
            width: `${this.state.width}px`,
            height: `${this.height}px`
        }
        return (
            <div style={divStyle} className="photo-grid">
                {grid}
            </div>
        )
    }
}