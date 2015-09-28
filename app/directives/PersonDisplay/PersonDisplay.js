angular.module('personas.directives')

.directive('personDisplay', [function(){
  return {
    $scope: {
      data: '=person'
    },
    restrict: 'E',
    templateUrl: './directives/PersonDisplay/PersonDisplay.html',
    controller: ['$scope', function($scope) {
      $scope.toggleOnCall = function(person) {
        person.onCall = !person.onCall;
      };
    }]
  };
}]);
