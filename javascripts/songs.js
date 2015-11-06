require(
  ["jquery", "populateSongs", "getMoreSongs"],
  function($, populateSongs, getMoreSongs) {
  // All the JavaScript that depends on jQuery will be written here


	$("#showform").click(function() {
    $("#yellow").hide();
    $("#blue").hide();
    $(".hiddens").show();
  });

	$("#listform").click(function() {
		$("#yellow").show();
		$("#blue").show();
		$(".hiddens").hide();
	});

// Trying to make this work

  $("#add").click(function() {
  	 songs.push($("songname").value + " by " + $("artistname").value + " on the album " + $("albumname").value);
  	 songLoader();    

  });

  $(document).on('click', '.delete', function() {
    $(this).parent().remove();
    console.log(this);
  });

  function displayInDom(songList) {
    	console.log("songList", songList);
    	for (var i = 0; i < songList.songs.length; i++) {
  	  	var currentSong = songList.songs[i];
  	  	$("#yellow").prepend(
  	  		"<div><h1>" + 
  	  		currentSong.title + 
  	  		"</h1><p> by " +
  	  		currentSong.artist + 
  	  		"<p> on the album " +
          currentSong.album +
           "</p></p><button class='delete'>Delete</button></div>"
  	  	);
    		console.log("currentSong", currentSong.title);
    }
    
  }

  // populateSongs.getFirstSongs(displayInDom);

    $("#more").click(function() {
      getMoreSongs.getSecondSongs(displayInDom);
    });

});//End of Define