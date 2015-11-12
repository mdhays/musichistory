require(
  ["jquery", "populateSongs", "getmoreSongs", "filter", "songdisplay", "firebase"],
  function($, populateSongs, getMoreSongs, filter, songdisplay, firebase) {
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

$("#filter").click(function() {
  filter.filterMe();
    });

// Getting the inputs //

function getTheInputs() {
  var songInput = $("#songname").val();
  var artistInput = $("#artistname").val();
  var albumInput = $("#albumname").val();
        
}


  $(document).on('click', '.delete', function() {
    $(this).parent().remove();
    console.log(this);
  });



      // Create a reference to your Firebase database
    var myFirebaseRef = new Firebase("https://musichistory7hays.firebaseio.com");
    console.log("myFirebaseRef", myFirebaseRef);
    // Listen for when anything changes on the "songs" key
    myFirebaseRef.on("value", function(snapshot) {

      // Store the entire songs key in a local variable
      var allSongsObject = snapshot.val();

      // Bind the allSongsObject to the song list Handlebar template
  
        songdisplay.songDisplay(allSongsObject);

      // Bind the unique artists to the artists template


      // Bind the unique albums to the albums template

    });


});//End of Define