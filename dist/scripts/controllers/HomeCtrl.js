 (function() {
     function HomeCtrl(Room, Message, $modal) {
      console.log(Room);
      console.log(Message.addMessage);
        this.rooms = Room.all;
        this.messages = Message.arrayOfMessages;
        this.addMessage = Message.addMessage;
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
        }
        
        this.getDateTime = function() {

          var date = new Date();
      
          var hour = date.getHours();
          hour = (hour < 10 ? "0" : "") + hour;
      
          var min  = date.getMinutes();
          min = (min < 10 ? "0" : "") + min;
      
          var sec  = date.getSeconds();
          sec = (sec < 10 ? "0" : "") + sec;
      
          var year = date.getFullYear();
      
          var month = date.getMonth() + 1;
          month = (month < 10 ? "0" : "") + month;
      
          var day  = date.getDate();
          day = (day < 10 ? "0" : "") + day;
      
          return month + "-" + day + "-" + year + " " + hour + ":" + min + ":" + sec;
     }
     
     ///////////////
     var mess = {
        username: "PC",
        content: "Message stays in the closet",
        sentAt:  this.getDateTime(),
        roomId: "-KWYhnxpVqz9l4yFNkli"
        }
 
     
     this.addMessage(mess);
     
     
     
     
     
     
     //////////////////////////
    }
 
     angular
         .module('aBlocChat')
         .controller('HomeCtrl', ['Room', 'Message', '$modal', HomeCtrl]); 
 })();
 