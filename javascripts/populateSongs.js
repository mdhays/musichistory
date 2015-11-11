
define(["jquery"], function($) {
	return {
		getFirstSongs: function(whenAJAXDoneFunc) {
			 $.ajax({
			    url: "https://musichistory7hays.firebaseio.com/.json"
			  }).done(function(contentsOfTheFile) {
			    // When you tell jQuery to read a file via the ajax method
			    // it reads the contents, and then executes whatever function
			    // that you specify here in the done() method, and passes in
			    // the contents of the file as the first argument.
			    console.log("the contents of songs.json");
			    console.log(contentsOfTheFile);
			    whenAJAXDoneFunc(contentsOfTheFile);
			  });
		  	}	
		};
  });