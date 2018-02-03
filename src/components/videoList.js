angular.module('video-player')
  .component('videoList', {
    // TODO 
    bindings: {
      videos: '<',
      onClick: '<',
    },
    
    controller: function() {
      // console.log(this);
    },
    
    templateUrl: 'src/templates/videoList.html'
  });
