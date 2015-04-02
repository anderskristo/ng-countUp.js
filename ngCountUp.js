angular.module('ngCountUp', []).
  directive('ngCountUp', function($timeout) {

    var linker = function ($scope, element, attrs) {
      var elem = element[0];

      // Create countUp
      var count = new countUp(
        elem,
        $scope.from,
        $scope.to,
        $scope.decimals,
        $scope.duration,
        $scope.options
      );

      // Run after delay
      if ($scope.delay) {
        angular.element(elem).addClass('ng-hide');      // Hide countUp if delay exist
        $timeout(function() {
          angular.element(elem).removeClass('ng-hide'); // Display countUp when delay has ended
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
