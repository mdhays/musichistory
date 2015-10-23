$(document).ready(function() {
  // All the JavaScript that depends on jQuery will be written here


	$("#showform").click(function() {
		$("#yellow").hide();
		$("#blue").hide();
		$(".hidden").show();
	});

	$("#listform").click(function() {
		$("#yellow").show();
		$("#blue").show();
		$(".hidden").hide();
	});

});
		
// Trying to make this work

$("add").click(function() {
	songs.push$("songname").value + " by " + $("artistname").value + " on the album " + $("albumname").value;
	songLoader();    
});

  $.ajax({
    url: "json/part5.json"
  }).done(function(contentsOfTheFile) {
    // When you tell jQuery to read a file via the ajax method
    // it reads the contents, and then executes whatever function
    // that you specify here in the done() method, and passes in
    // the contents of the file as the first argument.
    console.log("the contents of songs.json");
    console.log(contentsOfTheFile);
  });
