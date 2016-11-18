 (function() {
     function HomeCtrl($scope, Room, Message, $modal, $cookies) {
        this.rooms = Room.all;
        this.getByRoomById = Message.getByRoomId;
        this.addMessage = Message.addMessage;
        this.currentRoom = '';
        this.newMessage = {};
        
        this.openModal = function() {
         $modal.open({
           templateUrl: 'templates/modal.html',
           controller: 'ModalCtrl',
           size: 'sm'
         })
        }
        
        this.setCurrentRoom = function(room) {
           this.currentRoom = room;
           this.messages = this.getByRoomById(room.$id);
        }
       
        this.getDateTime = function() {

          var date = new Date();
          var hour = date.getHours();
          hour = (hour < 10 ? "0" : "") + hour;
          var min  = date.getMinutes();
          min = (min < 10 ? "0" : "") + min;
          var sec  = date.getSeconds();
          sec = (sec < 10 ? "0" : "") + sec;
          return hour + ":" + min + ":" + sec;
         }
     
        this.sendMessage = function(message) {
         if (message && message !== '') {
          this.newMessage.username = $cookies.get('aBlocChatCurrentUser');
          this.newMessage.content = message;
          this.newMessage.sentAt = this.getDateTime();
          this.newMessage.roomId = this.currentRoom.$id;
          this.addMessage(this.newMessage);
          $scope.userMessage = '';
         }
        }
    }
 
     angular
         .module('aBlocChat')
         .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$modal', '$cookies', HomeCtrl]); 
 })();
 