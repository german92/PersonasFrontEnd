angular.module('personas.controllers')

.controller('PersonController',['personService', function() { //HeroController Defines the name of the controller
    var ctrl = this;
    crtl.personData = [];
    personService.personData().success(function (argument) {
      ctrl.personData = argument;
    });
}]);
