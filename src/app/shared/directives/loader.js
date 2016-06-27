// directive to display a loader until the waited-for object loads

var angular = require('angular');
var sharedModule = require('../index');

angular
    .module(sharedModule)
    .directive('loader', function () {
        var $element, $loader = $(require("./loader.html"));

        return {
            restrict: 'A',
            scope: {
                waitFor: '='
            },
            link: function (scope, element, attrs) {
                $element = $(element);
                if (!scope.waitFor) {
                    $loader.show();
                    $element.before($loader);
                    $element.hide();
                }

                scope.$watch("waitFor", function (newValue, oldValue) {
                    if (newValue && !oldValue) {
                        $loader.hide();
                        $element.fadeIn(1000);
                    }
                });
            }
        };
    });
