(function() {
  function Message($firebaseArray) {
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);

    var getByRoomId = function (roomId) {
      var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
      return $firebaseArray(ref);
    }

    var addMessage = function(message) {
      messages.$add(message);
    }
    
      
    return {
      getByRoomId: getByRoomId,
      addMessage: addMessage
    }
    };

  angular
    .module('aBlocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();