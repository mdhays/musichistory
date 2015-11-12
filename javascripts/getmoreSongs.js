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
          url: "https://musichistory7hays.firebaseio.com/songs.json",
          method: "POST"
        }).done(function(data) {
          console.log(data);
        });

        });

    });


