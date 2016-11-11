 (function() {
     function HomeCtrl(Room) {
        this.rooms = Room.all;
     }
 
     angular
         .module('aBlocChat')
         .controller('HomeCtrl', ['Room', HomeCtrl]); 
 })();
 