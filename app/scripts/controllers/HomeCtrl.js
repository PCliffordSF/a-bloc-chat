 (function() {
     function HomeCtrl(Room, Message, $modal) {
        this.rooms = Room.all;
        this.messages = Message.messages;
        this.currentRoom = '';

        this.openModal = function() {
         $modal.open({
           templateUrl: 'templates/modal.html',
           controller: 'ModalCtrl',
           size: 'sm'
         })
        }
        
        this.setCurrentRoom = function(room) {
           this.currentRoom = room;
           console.log(this.currentRoom);
        }
        
        
        
        

    }
 
     angular
         .module('aBlocChat')
         .controller('HomeCtrl', ['Room', 'Message', '$modal', HomeCtrl]); 
 })();
 