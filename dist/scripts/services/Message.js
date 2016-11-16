(function() {
  function Message($firebaseArray) {


    var getByRoomId = function (roomId) {
      var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
      return $firebaseArray(ref);
    }

    // var addMessage = function(message) {
    //   messages.$add(message);
    // }
      
    return {
      getByRoomId: getByRoomId,
    }
    };

  angular
    .module('aBlocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();