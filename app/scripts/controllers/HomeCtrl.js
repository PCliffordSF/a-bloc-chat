 (function() {
     function HomeCtrl(Room, Message, $modal) {
        this.rooms = Room.all;
        this.getByRoomById = Message.getByRoomId;
        this.addMessage = Message.addMessage;
        this.currentRoom = '';
        this.messages = '';
        

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
        
        this.sendMessage = function(message) {
            // this.addMessage(message);
            console.log("message send");
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
     // var mess = {
     //    username: "PC",
     //    content: "Message stays in the bedroom",
     //    sentAt:  this.getDateTime(),
     //    roomId: "-KWYhpoCVUUnMB8rbxYH"
     //    };
 


     
     // this.addMessage(mess);
     
     //////////////////////////
    }
 
     angular
         .module('aBlocChat')
         .controller('HomeCtrl', ['Room', 'Message', '$modal', HomeCtrl]); 
 })();
 