import React from "react";
import VideoListItem from "./VideoListItems";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const VideoList = ({isFetching, videos, onVideoSelect }) => {
  const style = {
    container: {
      height: "85vh",
      overflow: "auto"
    }
  };

  if(isFetching)
    return <div>Loading ...</div>;

  if (!videos || videos.length === 0 )
    return <div>No Result</div>;

  return (
    <div style={style.container}>
      <ul className="list-group">
        {videos.map(video => (
          <VideoListItem
            key={video.etag}
            video={video}
            onVideoSelect={onVideoSelect}
          />
        ))}
      </ul>
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  isFetching : PropTypes.bool
};

VideoList.defaultProps = {
  videos: [],
  isFetching : false
}

const mapStateToProps = state => {
  console.log(state);
  const { lastSearch, videosBySearchText } = state
  const { isFetching, lastUpdated, items: videos } = videosBySearchText[
    lastSearch
  ] || {
    isFetching: false,
    items: []
  }

  return {
    lastSearch,
    videos,
    isFetching,
    lastUpdated
  }  
};

export default connect(mapStateToProps)(VideoList);
