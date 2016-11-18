 (function() {
     function UserNameModalCtrl($scope, $cookies, $modalInstance) {
         $scope.storeName = function() {
            $cookies.put('aBlocChatCurrentUser', $scope.userName);
            if (($cookies.get('aBlocChatCurrentUser')) && ($cookies.get('aBlocChatCurrentUser') !== '')) {
               $modalInstance.close('cancel');
            }
         }
     }
 
     angular
         .module('aBlocChat')
         .controller('UserNameModalCtrl', ['$scope', '$cookies', '$modalInstance', UserNameModalCtrl]); 
 })();