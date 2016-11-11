 (function() {
     function HomeCtrl(Room) {
        this.rooms = Room.all;
     }
     
     //create room modal function
 
     angular
         .module('aBlocChat')
         .controller('HomeCtrl', ['Room', HomeCtrl]); 
 })();
 