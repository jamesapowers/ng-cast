angular.module('video-player')
  .component('videoListEntry', {
    // TODO
    bindings: {
      video: '<',
      onClick: '<'
    },
    
    controller: function() {
      // console.log(this);

    },
    
    templateUrl: 'src/templates/videoListEntry.html'
  });
