'use strict';

angular.module('App', [
  'ngCountUp'
])

.controller('AppCtrl', ['$scope', function($scope) {  
  $scope.options = {
    useEasing : true,
    useGrouping : true,
    separator : ',',
    decimal : '.',
    prefix : '',
    suffix : ''
  };
}]);
