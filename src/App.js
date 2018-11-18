import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import { fetchVideos } from './api/YouTubeApi';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
    this.videoSearch('');
  }

  videoSearch = term => {
    fetchVideos({ term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };

  onVideoSelect = selectedVideo => this.setState({ selectedVideo: selectedVideo });

  render() {
    console.log(this.state);
    // const videoSearch = _.debounce(, 300);
    return (
      <div className="">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            VideoAPP
          </a>
        </nav>
        <SearchBar videoSearch={this.videoSearch} />
        <div style={{ display: 'flex' }}>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        </div>
      </div>
    );
  }
}

export default App;
