import React from 'react';

const VideoDetail = ({ video }) => {
  const style = {
    card: {
      marginRight: 5,
      height: '85vh'
    }
  };

  if (video) {
    const id = video.id.videoId;
    const url = `https://www.youtube.com/embed/${id}`;

    return (
      <div className="card" style={style.card}>
        <div className="card-img-top">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" title={video.etag} src={url} allowFullScreen />
          </div>
        </div>
        <div className="card-body">
          <h5>{video.snippet.title}</h5>
          <p className="card-text">{video.snippet.description}</p>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
