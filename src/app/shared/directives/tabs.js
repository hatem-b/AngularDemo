// directive to setup the jquery code needed by materialize for tabs

var angular = require('angular');
var sharedModule = require('../index');

angular
	.module(sharedModule)
	.directive('tabs', function () {
		return {

			restrict: 'C',

			link: function (scope, element, attrs) {
				$(element).tabs();
			}
		};
	});