var app = angular.module("SongsApp", ['firebase', 'ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    //Route for the song list to load. It loads when clicking "List music"
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      })
      //Route for the song form to load. It loads when clicking "Add music"
      // when('/songs/new', {
      //   templateUrl: 'partials/song-form.html',
      //   controller: 'SongCtrl'
      // })
      //Route for the song list to load if the url doesn't match either of the above urls.
      //.otherwise
      .otherwise('/songs/list');
  }]);