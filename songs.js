var songs = [];
console.log("song output");

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
console.log("songLengths", songs)

//Reference	to the appropriate DOM element
var songsElement = document.getElementById("yellow")
console.log("song location")
//Each student must add one song to the beginning of the array.
songs.unshift("Peace Of Mind > by Above and Beyond on album We're All We Need")


//Each student must add one song to the end of the array.
songs.push("Moonlight Sonata > by Ludwig van Beethoven on the album Classics for the Heart")

// All the functionality as of Version4
 var songLoader =function () {

	for (var i = 0; i < songs.length ; i++) {
		songs[i] = songs[i].replace("*", "");
		songs[i] = songs[i].replace("@", "");
		songs[i] = songs[i].replace("(", "");
		songs[i] = songs[i].replace(">", "-");
		songs[i] = songs[i].replace("!", "")
	}
	console.log("currentvalue", songs[i])

	songsElement.innerHTML = songs
}
// songLoader();
/*  / This adds songs to DOM /

document.getElementById("add").addEventListener("click", function() {
	songs.push(document.getElementById("songname").value + " by " + document.getElementById("artistname").value + " on the album " + document.getElementById("albumname").value);
	songLoader();    
});


document.getElementById("showform").addEventListener("click", function(event) {
	event.preventDefault();
	document.getElementById("yellow").className = "hidden";
	document.getElementById("blue").className = "hidden";
	document.getElementById("inputs").className = "visible";
});
console.log("showform", showform)

document.getElementById("listform").addEventListener("click", function(event) {
	event.preventDefault();
	document.getElementById("yellow").className = "visible";
	document.getElementById("blue").className = "visible";
	document.getElementById("inputs").className = "hidden";
}); */

// Version5

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

