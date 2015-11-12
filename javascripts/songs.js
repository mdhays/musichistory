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



      // Created a reference to my Firebase database
    var myFirebaseRef = new Firebase("https://musichistory7hays.firebaseio.com");
    console.log("myFirebaseRef", myFirebaseRef);
    // Listening for when anything changes on the "songs" key
    myFirebaseRef.on("value", function(snapshot) {

      // Storing the entire songs key in a local variable
      var allSongsObject = snapshot.val();

      
        //This is what's updating the DOM. We're telling the file to go into the songdisplay
        songdisplay.songDisplay(allSongsObject);

    });


});//End of Define