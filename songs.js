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


for (var i = 0; i < songs.length ; i++) {
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace(">", "-");
	songs[i] = songs[i].replace("!", "")
}
console.log("currentvalue", songs[i])

songsElement.innerHTML = songs