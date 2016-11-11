 (function() {
     function ModalInstanceCtrl(Room) {
         var $ctrl = this;
         
          $ctrl.createRooomm = function(room) {
           rooms.$add(room);
        }
        
         $ctrl.cancel = function () {
           $uibModalInstance.dismiss('cancel');
  };
        
     }
 
     angular
         .module('aBlocChat')
         .controller('ModalInstanceCtrl', ['Room', ModalInstanceCtrl]); 
 })();
 