app.controller("SongCtrl", ["$q", "$http", "$scope", "simpleSongs", function($q, $http, $scope, simpleSongs) {
	$scope.title = "Welcome to your music history";
	// Array to put songs from the json files into.
  $scope.songs = [];
  // Promise gets the songs and displays them on the dom


    simpleSongs.loadSongs().then(function(s) {
      $scope.songs = s;
      console.log($scope.songs)
    })
  	//Add a new function
}]);

