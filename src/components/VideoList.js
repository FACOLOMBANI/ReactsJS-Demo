import React from 'react';
import VideoListItem from './VideoListItems';

const VideoList = ({ videos, onVideoSelect }) => {
  const style = {
    container: {
      height: '85vh',
      overflow: 'auto'
    }
  };

  const VideoItems = videos.map(video => {
    return <VideoListItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />;
  });
  return (
    <div style={style.container}>
      <ul className="list-group">{VideoItems}</ul>
    </div>
  );
};

export default VideoList;
