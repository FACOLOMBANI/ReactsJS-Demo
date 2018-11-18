import React from 'react';
import { Tooltip } from 'react-tippy';

const style = {
  p: {
    fontSize: 12
  },
  img: {
    marginRight: 5
  },
  container: {
    width: 400
  }
};

const VideoListItems = ({ video, onVideoSelect }) => {
  const dateCreation = new Date(video.snippet.publishedAt).toLocaleString().split(',')[0];

  return (
    <Tooltip title={video.snippet.title}>
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        onClick={() => onVideoSelect(video)}
      >
        <img
          className="img-thumbnail"
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
          style={style.img}
        />
        <div style={style.container}>
          <h6>{video.snippet.title}</h6>
          <small>Created: {dateCreation}</small>
        </div>
      </li>
    </Tooltip>
  );
};

export default VideoListItems;
