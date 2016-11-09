(function() {
  function Room($firebaseArray) {
   
     var ref = firebase.database().ref();
    var rooms = $firebaseArray(ref.child("rooms"));
    
    // rooms.$add("closet2");
    // var rooms = ["bedroom", "bathroom", "outhouse"]
    
    return {
        all: rooms
    };
  }

  angular
    .module('aBlocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();