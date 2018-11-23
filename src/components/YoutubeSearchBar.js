import React from "react";
import { connect } from "react-redux";
import { fetchVideosIfNeeded } from "../actions/videoActions";
import SearchBar from "./SearchBar";

const YoutubeSearchBar = ({fetchVideosIfNeeded, ...props}) => <SearchBar search={fetchVideosIfNeeded} {...props} />

const mapDispatchToProps = { fetchVideosIfNeeded };

export default connect(
  null,
  mapDispatchToProps
)(YoutubeSearchBar);
