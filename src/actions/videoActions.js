import { fetchVideos as fetchYoutubeVideo } from "../api/YouTubeApi";
export const SEARCH = "SEARCH";
export const setLastSearch = text => {
  return {
    type: SEARCH,
    text
  };
};

export const REQUEST_VIDEOS = "REQUEST_VIDEOS";
const requestVideos = text => {
  return {
    type: REQUEST_VIDEOS,
    text
  };
};

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
const receiveVideos = (text, json) => {
  return {
    type: RECEIVE_VIDEOS,
    text,
    videos: json.data.items,
    receivedAt: Date.now()
  };
};

export const INVALIDATE_SEARCH = "INVALIDATE_SEARCH";
export const invalidateSearch = text => {
  return {
    type: INVALIDATE_SEARCH,
    text
  };
};

const fetchVideos = text => {
  return dispatch => {
    dispatch(requestVideos(text));
    return fetchYoutubeVideo(text).then(json =>
      dispatch(receiveVideos(text, json))
    );
  };
};

const shouldFetchVideos = (state, text) => {
  const videos = state.videosBySearchText[text];
  if (!videos) {
    return true;
  } else if (videos.isFetching) {
    return false;
  } else {
    return videos.didInvalidate;
  }
};

export const fetchVideosIfNeeded = text => {
  return (dispatch, getState) => {
    if (shouldFetchVideos(getState(), text)) {
      return dispatch(fetchVideos(text));
    } else {
      return Promise.resolve();
    }
  };
};
