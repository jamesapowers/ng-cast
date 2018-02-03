angular.module('video-player')
  .service('youTube', function($http) {
    // TODO
    this.search = function(string, callback) {
      $http({
        method: 'GET',
        params: {
          q: string,
          key: window.YOUTUBE_API_KEY,
          maxResults: 5,
          part: 'snippet'
        },
        
        url: 'https://www.googleapis.com/youtube/v3/search'
      }).then(function successCallback(response) {
        console.log(response.data.items);
        callback(response.data.items);
      }, function errorCallback(response) {
        console.log('ERROR', response);
      });
    };
  });
