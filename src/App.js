import _ from 'lodash';
import React, { Component } from 'react';
import YoutubeSearchBar from './components/YoutubeSearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import { fetchVideos } from './api/YouTubeApi';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null
    };
  }

  componentDidMount() {
    this.videoSearch('');
  }

  videoSearch = term => {
    fetchVideos({ term }, videos => {
      this.setState({
        selectedVideo: videos[0]
      });
    });
  };

  onVideoSelect = selectedVideo => this.setState({ selectedVideo: selectedVideo });

  render() {
    return (
      <div className="">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            VideoAPP
          </a>
        </nav>
        <YoutubeSearchBar />
        <div style={{ display: 'flex' }}>
          <VideoList onVideoSelect={this.onVideoSelect} />
          {this.state.selectedVideo && <VideoDetail video={this.state.selectedVideo}/>}
        </div>
      </div>
    );
  }
}

export default App;
