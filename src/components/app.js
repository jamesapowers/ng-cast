angular.module('video-player')
  .component('app', {
  // TODO
    controller: function() {
      this.videos = window.exampleVideoData;
      this.selected = window.exampleVideoData[0];
      
      this.onSelectVideo = () => {
        
      };
      
    },
  
    templateUrl: 'src/templates/app.html'
  });
