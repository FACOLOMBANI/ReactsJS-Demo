import { combineReducers } from "redux";

import {
  SEARCH,
  INVALIDATE_SEARCH,
  REQUEST_VIDEOS,
  RECEIVE_VIDEOS
} from "../actions/videoActions";
const lastSearch = (state = "", action) => {
  switch (action.type) {
    case SEARCH:
      return action.text;
    default:
      return state;
  }
};

const videos = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case INVALIDATE_SEARCH:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_VIDEOS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_VIDEOS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.videos,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

const videosBySearchText = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_SEARCH:
    case REQUEST_VIDEOS:
    case RECEIVE_VIDEOS:
      return Object.assign({}, state, {
        [action.text]: videos(state[action.text], action)
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  videosBySearchText,
  lastSearch
});

export default rootReducer;
