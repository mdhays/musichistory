define(["jquery", "populateSongs"], function($, populateSongs) {

	var myFirebaseData;
	var filter = $("#filter");
	var filteredSongs = {songs:{}};

	populateSongs.getFirstSongs(function(firebaseObject) {
		myFirebaseData = firebaseObject;
	});
// If it does, add that song object to a new object named `filteredSongs`
function filterMe() {
	filteredSongs = {songs:{}};

		// Get the selected artist √
	var selectedArtist = $("#Artist option:selected").val();
		
	// Loop through all songs that you get from Firebase
	for (var key in myFirebaseData.songs) {
		var currentSong = myFirebaseData.songs[key];
			console.log(currentSong);
			console.log(selectedArtist);

			// In the loop, check if the current song's artist value
		// matches the selected artist
		
		if (selectedArtist === currentSong.artist) {
			filteredSongs.songs[key] = currentSong;
			console.log("THE ANSWER IS:",filteredSongs.songs[key]);
		}
	}
	$("#yellow").html("");
	
		require(['hbs!../templates/songs'], function (songTemplate){
        //jquery to grab the dom element where we want to put our songs
        //use songTemplate on data to generate html
        //insert html into dom
        $("#yellow").prepend(songTemplate(filteredSongs));
      });


		

		

		// Pass filteredSongs to the Handlebar template

	}

	return {
		filterMe: filterMe,
	};






});