angular.module('video-player')
  .component('app', {
  // TODO
    controller: function($scope, youTube) {
      
      this.onSelectVideo = (video) => {
        this.selected = video;
      };
      
      this.updateSearchVideos = (data) => {
        this.videos = data;
        this.selected = data[0];
      };
      
      this.search = (userText) => {
        youTube.search(userText, this.updateSearchVideos);
      };
      
      this.search('golden gate bridge');
    },
  
    templateUrl: 'src/templates/app.html'
  });
