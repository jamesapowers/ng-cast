window.debounce = null;
window.auto = 0;

angular.module('video-player')
  .component('app', {
  // TODO
    controller: function($scope, youTube) {
      
      this.onSelectVideo = (video) => {
        video.auto = window.auto;
        this.selected = video;
      };
      
      this.updateSearchVideos = (data) => {
        data[0].auto = window.auto;
        this.videos = data;
        this.selected = data[0];
      };
      
      this.search = (userText) => {
        youTube.search(userText, this.updateSearchVideos);
      };
      
      this.search('golden gate bridge');
      
      // this.auto = 0;
    },
  
    templateUrl: 'src/templates/app.html'
  });
