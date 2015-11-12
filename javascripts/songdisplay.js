define(["jquery", "populateSongs"], function($, populateSongs) {

  // We're returning the function immediately so we can use the function like an object,
  // where songDisplay is a key.
  return {
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