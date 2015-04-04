angular.module('ngCountUp', []).
  directive('ngCountUp', ['$timeout', function($timeout) {

    var linker = function ($scope, element, attrs) {
      // Set default values
      $scope.from = 0;
      $scope.to = 0;
      $scope.decimals = 0;
      $scope.duration = 0;
      $scope.delay = 0;

      $scope.$watchCollection('[from, to, decimals, duration, delay]', function(newValues, oldValues) {
        if (newValues) {
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
        } else {

        }
      });
    };

    return {
      restrict: 'E',
      scope: {
        from: '@',
        to: '@',
        decimals: '@',
        duration: '@',
        delay: '@',
        options: '='
      },
      link: linker
    };

  }]);
