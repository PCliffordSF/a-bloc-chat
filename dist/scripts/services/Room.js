(function() {
  function Room($firebaseArray) {
   
     var ref = firebase.database().ref();
     var rooms = $firebaseArray(ref.child("rooms"));
     var addRoom = function(room) {
       rooms.$add(room);
     }
     var getRooms = function() {
         return rooms;
     }
    
    // rooms.$add("closet2");
    // var rooms = ["bedroom", "bathroom", "outhouse"]
    
    return {
        all: rooms,
        addRoom: addRoom,
        getRooms: getRooms
    };
  }

  angular
    .module('aBlocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();