import axios from 'axios';

const API_KEY = 'AIzaSyCqzJkJl_xJhfOhndAg15RS3vQuQdFqRj0';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchVideos = ({ term }, callback) => {
  var params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
    maxResults: 50
  };

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
