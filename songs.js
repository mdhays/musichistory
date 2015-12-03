var app = angular.module("SongsApp", []);
  // All the JavaScript that depends on jQuery will be written here

app.controller("SongsCtrl", ["$q", "$http", "$scope", function($q, $http, $scope) {
	$scope.title = "Welcome to your music history";
	$scope.songs = [];
  	$scope.removeSong = function(song) {
  // Do you see the PFM here of full object comparison?
 		 var todoIndex = $scope.todos.indexOf(todo); 

 		if (todoIndex >= 0) {
   			$scope.songs.splice(todoIndex, 1);
  		}
  	};
  // Promise gets the songs and displays them on the dom
	var getSongs = $q(function(resolve, reject) {

		console.log("working");

  		var getFirstSongs = $http.get('./json/part5.json')
      	.success(
        function(objectFromJSONFile) {
        	resolve(objectFromJSONFile.songs);
        }, 
        function(error) {
          reject(error);
        });
    });

	console.log("getSongs", getSongs);

	getSongs.then(function (songs) {
    	console.log("songs",songs);
    	$scope.songs = songs;
  	},
	function (error) {
    	console.log("Failed");
  	});

}]);

