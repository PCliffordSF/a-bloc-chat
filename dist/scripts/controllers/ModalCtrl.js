 (function() {
     console.log("inside modal")
     function ModalCtrl(Room, $uibModal, $document) {
      var $ctrl = this;
    
      $ctrl.animationsEnabled = true;
    
      $ctrl.open = function (size, parentSelector) {
        var parentElem = parentSelector ? 
          angular.element($document[0].querySelector('.modal-content ' + parentSelector)) : undefined;
          
        var modalInstance = $uibModal.open({
          animation: $ctrl.animationsEnabled,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'modal.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: '$ctrl',
          size: size,
          appendTo: parentElem,
          resolve: {
            items: function () {
              return $ctrl.items;
            }
          }
        });
        
      };
        
      $ctrl.toggleAnimation = function () {
        $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
      };
    };
    
     angular
         .module('aBlocChat')
         .controller('ModalCtrl', ['Room', '$uibModal', '$document', ModalCtrl]);
 })();
 