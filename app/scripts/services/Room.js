(function() {
  function Room($firebaseArray) {
   
     var ref = firebase.database().ref();
     var rooms = $firebaseArray(ref.child("rooms"));
     var addRoom = function(room) {
      return rooms.$add(room);
     }

    
    return {
        all: rooms,
        addRoom: addRoom
    };
  }

  angular
    .module('aBlocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();