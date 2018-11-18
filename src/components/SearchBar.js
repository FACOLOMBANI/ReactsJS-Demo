import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onInputChange = event => {
    this.setState({ value: event.target.value }, () => this.props.videoSearch(this.state.value));
  };

  render() {
    const style = {
      searchBar: {
        marginTop: 15
      }
    };

    return (
      <div className="form-group" style={style.searchBar}>
        <input type="text" className="form-control" placeholder="Video search" onChange={this.onInputChange} />
      </div>
    );
  }
}

export default SearchBar;
