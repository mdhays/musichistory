define(["jquery"], function($) {

var filter = $("#filter");

	filter.click(function() {
		var artistMatch = $("#Artist option:selected").text();
			console.log("artistMatch", artistMatch);
		var albumMatch = $("#Album option:selected").text();
			console.log("albumMatch", albumMatch);
		var listOfSongs = $(".songs");
		console.log("listOfSongs", listOfSongs);
		console.log("event", event);
	});
});
