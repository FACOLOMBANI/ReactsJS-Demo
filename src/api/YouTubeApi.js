import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_APIKEY; // Your API key
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchVideosWithCallback = ({ term }, callback) => {
  var params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
    maxResults: 50
  };
  console.log(process.env);
  axios
    .get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) {
        callback(response.data.items);
      }
    })
    .catch(function(error) {
      console.error(error);
    });
};

export const fetchVideos = (term) => {
  var params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
    maxResults: 50
  };

  return axios.get(ROOT_URL, { params: params });
};
