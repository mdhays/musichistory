define(["jquery"], function($) {

  //         getSecondSongs: function(whenAJAXDoesThisFunc) { 
  //           $.ajax({
  //             url: "../json/part51.json"
  //           }).done(function(contentsOfTheFile) {
  //               // When you tell jQuery to read a file via the ajax method
  //               // it reads the contents, and then executes whatever function
  //               // that you specify here in the done() method, and passes in
  //               // the contents of the file as the first argument.
  //               console.log("the contents of songs.json");
  //               console.log(contentsOfTheFile);
  //               whenAJAXDoesThisFunc(contentsOfTheFile); 
  //          });
  //       } 
  //   };
  // });


    $("#add").click(function(e) {
      var newSong = {
        "name": $("#songname").val(),
        "artist": $("#artistname").val(),
        "album": $("#albumname").val()
      };
        $.ajax ({
          data: JSON.stringify(newSong),
          url: "https://blinding-heat-5245.firebaseio.com/songs.json",
          method: "POST"
        }).done(function(data) {
          console.log(data);
        });

    });
});

