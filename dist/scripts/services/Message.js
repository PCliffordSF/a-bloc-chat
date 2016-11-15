(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    
    var arrayOfMessages = [ {
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
        },
                {
        username: "PC",
        content: "Message in the closet",
        sentAt: "This is the time sent",
        roomId: "-KWYhnxpVqz9l4yFNkli"
        }
      ];
      
    // messages.$add(Message.messages);
      
    var getByRoomId = function (roomId) {
      // Filter the messages by their room ID.
    }
    
    var addMessage = function(message) {
      messages.$add(message);
    }
      
    return {
      arrayOfMessages: arrayOfMessages,
      getByRoomId: getByRoomId,
      addMessage: addMessage
    }
    };

  angular
    .module('aBlocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();