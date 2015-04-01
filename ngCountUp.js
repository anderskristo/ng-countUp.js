angular.module('ngCountUp', []).
  directive('ngCountUp', function($timeout) {

    var linker = function ($scope, element, attrs) {

      // Create countUp
      var count = new countUp(
        element[0],
        $scope.from,
        $scope.to,
        $scope.decimals,
        $scope.duration,
        $scope.options
      );

      // Run after delay
      if ($scope.delay) {
        $timeout(function() {
          count.start();
        }, $scope.delay);
      } else {
        count.start();
      }
    };

    return {
      restrict: 'E',
      scope: {
        from: '=',
        to: '=',
        decimals: '=',
        duration: '=',
        delay: '=',
        options: '='
      },
      link: linker
    };

  });
