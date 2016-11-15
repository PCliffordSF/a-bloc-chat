(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    // var messages = $firebaseArray(ref);
    
    var Message = {};
    
    Message.messages = [ {
        username: "Paul Clifford",
        content: "This is a test message",
        sentAt: "This is the time sent",
        roomId: "Room ID"
        },
        {
        username: "Paul Caleb Clifford",
        content: "This is another test message",
        sentAt: "This is the time sent",
        roomId: "Room ID"
        }
      ];
      
    Message.getByRoomId = function (roomId) {
      // Filter the messages by their room ID.
    }
      
    return Message;
    };

  angular
    .module('aBlocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();