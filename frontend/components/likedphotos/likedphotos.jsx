import React from "react";
import { debounce } from "lodash";

import PhotoGrid from "../splash/photo_grid";

class Likedphotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 15
    };
    window.onscroll = debounce(() => {
      const { loading, hasMore } = this.props;
      if (loading || !hasMore) return;
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.loadPhotos();
      }
    }, 100);
  }

  loadPhotos() {
    const { offset, limit } = this.state;
    this.props.setLoading();
    this.props.fetchLikedPhotos({ offset, limit }).then(() => {
      this.setState({
        offset: offset + 15
      });
      this.props.setFinished();
    });
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  componentDidMount() {
    this.props.clearInfPhotos();
    this.loadPhotos();
  }

  render() {
    const { infPhotos } = this.props;

    return (
      <div className="liked-photos">
        {infPhotos.length > 0 ? (
          <>
            <PhotoGrid photos={infPhotos} />
          </>
        ) : null}
      </div>
    );
  }
}

export default Likedphotos;
