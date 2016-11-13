 (function() {
     function HomeCtrl(Room, $modal) {
        this.rooms = Room.all;
        
        
        this.openModal = function() {
         $modal.open({
           templateUrl: 'templates/modal.html',
           controller: 'ModalCtrl',
           size: 'sm'
         })
        }
        
        // this.changeRoom = function() {
        //   console.log('room was clicked!');
        // };
    }
 
     angular
         .module('aBlocChat')
         .controller('HomeCtrl', ['Room', '$modal', HomeCtrl]); 
 })();
 