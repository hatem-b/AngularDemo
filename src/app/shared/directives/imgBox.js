// directive to setup the jquery code needed by materialize for image box

var angular = require('angular');
var sharedModule = require('../index');

angular
  .module(sharedModule)
  .directive('materialboxed', function() {
    return {
        
        restrict: 'C',
        
        link: function(scope, element, attrs) {
            $(element).materialbox();
        }
    };
});