import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setLastSearch } from "../actions/videoActions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onInputChange = event => {
    this.props.setLastSearch(event.target.value);    
    this.props.search(event.target.value);
  };

  render() {
    const style = {
      searchBar: {
        marginTop: 15
      }
    };

    return (
      <div className="form-group" style={style.searchBar}>
        <input
          type="text"
          className="form-control"
          placeholder="Video search"
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func
};

SearchBar.defaultProps = {
  search: () => {}
};

const mapDispatchToProps = { setLastSearch };

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
