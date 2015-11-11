define(["jquery"], function($) {


    $("#add").click(function(e) {
      var newSong = {
        "title": $("#songname").val(),
        "artist": $("#artistname").val(),
        "album": $("#albumname").val(),
        "genre": $("#genrename").val()
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


