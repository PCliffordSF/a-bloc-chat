(function() {
  function Room($firebaseArray) {
   
     var ref = firebase.database().ref();
     var rooms = $firebaseArray(ref.child("rooms"));
     
     var addRoom = function() {
        console.log("inside addRoom()");
    //   return rooms.$add(room);
     }

    
    return {
        all: rooms,
        addRoom: addRoom,
    };
  }

  angular
    .module('aBlocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();