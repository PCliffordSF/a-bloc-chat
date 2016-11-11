 (function() {
     console.log("inside modal")
     function ModalCtrl(Room, $uibModal, $document) {
      var $ctrl = this;
    
      $ctrl.animationsEnabled = true;
    
      $ctrl.open = function (size, parentSelector) {
        var parentElem = parentSelector ? 
          angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
          
        var modalInstance = $uibModal.open({
          animation: $ctrl.animationsEnabled,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'myModalContent.html',
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
        
        $ctrl.createRooomm = function(room) {
          
          
        }
    
      modalInstance.result.then(function (selectedItem) {
          $ctrl.newRoom = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };
    
      $ctrl.openComponentModal = function () {
        var modalInstance = $uibModal.open({
          animation: $ctrl.animationsEnabled,
          component: 'modalComponent',
          resolve: {
            items: function () {
              return $ctrl.items;
            }
          }
        });
    
        modalInstance.result.then(function (selectedItem) {
          $ctrl.newRoom = selectedItem;
        }, function () {
          $log.info('modal-component dismissed at: ' + new Date());
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
 