(function(){
    function config($stateProvider, $locationProvider) {
        
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
            .state('home' /* state name part*/, {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html' /*state config part*/
            })

    }

    angular
        .module('aBlocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config);
})();