angular.module('video-player')

  .component('search', {
    bindings: {
      onClick: '<'
    },
    
    controller: function() {
      this.userText = '';
      
      this.debounce = () => {
        var context = this;
        if (context.userText !== '') {
          clearTimeout(window.debounce);
          window.debounce = setTimeout(function() {
            context.onClick(context.userText);
          }, 500);
        }
      };
    },
    
    templateUrl: 'src/templates/search.html'
  });
