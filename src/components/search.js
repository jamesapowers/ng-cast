angular.module('video-player')

  .component('search', {
    bindings: {
      onClick: '<'
    },
    
    controller: function() {
      this.userText = '';
    },
    
    templateUrl: 'src/templates/search.html'
  });
