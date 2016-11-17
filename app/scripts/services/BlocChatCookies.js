(function() {
  function BlocChatCookies($cookies, $modal) {
    $cookies.remove('aBlocChatCurrentUser');
    if (!$cookies.get('aBlocChatCurrentUser') || $cookies.get('aBlocChatCurrentUser') === '') {
      $modal.open({
           templateUrl: 'templates/userNameModal.html',
           controller: 'UserNameModalCtrl',
           size: 'sm'
      })
    }
  }

  angular
    .module('aBlocChat')
    .run(['$cookies', '$modal', BlocChatCookies]);
})();