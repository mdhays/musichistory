app.controller("SongCtrl", 
  ["$scope", 
   "$firebaseArray", 
  function($scope, $firebaseArray) {

  // Just like in the RequireJS version of Music History, make a reference
    var ref = new Firebase("https://musichistory7hays.firebaseio.com/songs");

  // Instead of snapshot.val(), use this syntax to get songs
    $scope.songs = $firebaseArray(ref);
    console.log($scope.songs);

  }
]);