angular.module('personas.services')

.services('personService', ['$http', function($http) {
  this.personData = function() {

    return $http({
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Acept': 'application/json'
      },
      // url: 'http://localhost:3000/people.json'
      url: 'https://safe-badlands-1036.herokuapp.com/people.json'
    });

  };
}]);
