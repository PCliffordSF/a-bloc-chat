 (function() {
     function ModalCtrl($scope, $modalInstance, Room) {
      
        $scope.newRoom = {};
        
        $scope.createRooom = function() {
          console.log("inside createRoom");
          
          newRoom = $scope.roomName;
          console.log(newRoom);
          
          Room.addRoom();
          
        }
        
        $scope.cancel = function(){
          $modalInstance.close('cancel');
        };
     }
     
  
     
     angular
         .module('aBlocChat')
         .controller('ModalCtrl', ['$scope', '$modalInstance', 'Room', ModalCtrl]);
 })();
 