/* What we need to do for this assignment
	Main objective is to switch everything over to Require and bootstrap.

	Use a √ (option + v) to mark off progress.

	√	1. Make multiple js module files and an entry.js. 
	√	2. The module's js files should contain the AJAX calls to your first and second JSON file with songs in it.
	√	3. The modules should return an array.
	√	4. On the entry.js file, specify both modules as dependencies. */


requirejs.config({
  baseUrl: "./javascripts",
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    }
  },
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs"
  }
});

require(
  ["jquery", "bootstrap", "hbs", "songs", "populateSongs"], 
  function($, bootstrap, hbs, songs, populateSongs) {
    populateSongs.getFirstSongs(function(data) {
      require(['hbs!../templates/songs'], function (songTemplate){
        //jquery to grab the dom element where we want to put our songs
        //use songTemplate on data to generate html
        //insert html into dom
        var newHTML = songTemplate(data);
        $("#yellow").prepend(newHTML);
      })
    })
  }
);

