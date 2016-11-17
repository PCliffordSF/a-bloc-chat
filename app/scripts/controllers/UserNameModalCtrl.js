 (function() {
     function UserNameModalCtrl($scope, $cookies, $modalInstance) {
         $scope.storeName = function() {
             console.log($scope.userName);
             $cookies.put('aBlocChatCurrentUser', $scope.userName);
             console.log($cookies.get('aBlocChatCurrentUser'));
             if (($cookies.get('aBlocChatCurrentUser')) && ($cookies.get('aBlocChatCurrentUser') !== '')) {
                $modalInstance.close('cancel');
            }
        }
     }
 
     angular
         .module('aBlocChat')
         .controller('UserNameModalCtrl', ['$scope', '$cookies', '$modalInstance', UserNameModalCtrl]); 
 })();