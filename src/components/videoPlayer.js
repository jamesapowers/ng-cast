angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<',
      auto: '<'
    },
    
    controller: function() {
      console.log(this);
      this.autoChange = () => {
        window.auto === 0 ? window.auto = 1 : window.auto = 0;
      };
    },
    
    templateUrl: 'src/templates/videoPlayer.html'
  });
