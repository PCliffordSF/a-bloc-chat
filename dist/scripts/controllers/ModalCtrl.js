 (function() {
     function ModalCtrl($scope, $modalInstance, Room) {

        $scope.createRoom = function() {
          Room.addRoom($scope.roomName).then(function(){
            $scope.newRoom.name = '';
            $modalInstance.close();
          });
        }
        
        $scope.cancel = function(){
          $modalInstance.close('cancel');
        };
     }
     
     angular
         .module('aBlocChat')
         .controller('ModalCtrl', ['$scope', '$modalInstance', 'Room', ModalCtrl]);
 })();
 