var sonnetElement = document.getElementById("sonnet");
var sonnetText = sonnetElement.innerHTML;
console.log("sonnetText", sonnetText);

var indexOfOrphans = sonnetText.indexOf("orphans");
console.log("indexOfOrphans", indexOfOrphans);
console.log("length of sonnet", sonnetText.length);

sonnetText = sonnetText.replace("winter", "yuletide");

sonnetElement.innerHTML = sonnetText;

sonnetElement.innerHTML = sonnetText.replace(/the/g, "a large");




