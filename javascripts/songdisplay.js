define(["jquery", "populateSongs"], function($, populateSongs) {

  return {
// This is what initially displays the songs.
// populateSongs.getFirstSongs(songDisplay);

    songDisplay: function(data) {
      require(['hbs!../templates/songs'], function (songTemplate){
        //jquery to grab the dom element where we want to put our songs
        //use songTemplate on data to generate html
        //insert html into dom
        $("#yellow").html(songTemplate(data));
      });

      require(['hbs!../templates/artistname'], function (artistTemplate){
        //jquery to grab the dom element where we want to put our songs
        //use songTemplate on data to generate html
        //insert html into dom
        $("#Artist").html(artistTemplate(data));
      });
    
      require(['hbs!../templates/albumname'], function (albumTemplate){
        //jquery to grab the dom element where we want to put our songs
        //use songTemplate on data to generate html
        //insert html into dom
        $("#Album").html(albumTemplate(data));
      });

    }
  };
});