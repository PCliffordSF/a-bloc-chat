(function() {
  function Room($firebaseArray) {
      var firebaseRef = new Firebase('ablocchat.firebaseio.com');
      console.log(firebaseRef);
    // var ref = firebaseRef.database().ref().child("rooms");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
    // var rooms = ["livingroom", "bedroom"];
    
    return {
        all: rooms
    };
  }

  angular
    .module('aBlocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();