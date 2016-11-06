console.log("outside config setup");
(function(){
    console.log("inside config setup");
    function config($stateProvider, $locationProvider) {
        
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
            .state('mainview' /* state name part*/, {
                url: '/',
                // controller: 'mainviewCtrl as mainview',
                templateUrl: '/templates/mainview.html' /*state config part*/
            })

    }

    angular
        .module('aBlocChat', ['ui.router', 'firebase'])
        .config(config);
    
})();