angular.module('personas', ['ui.router','ngAnimate','personas.controllers','personas.services','personas.directives'])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'index.html'
            });

    }
]);

angular.module('personas.controllers', []);
angular.module('personas.services', []);
angular.module('personas.directives', []);
