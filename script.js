var firstName = "Amedeka";
var lastName = "Tamatode";
var username = "Username: " +
 firstName + " " + lastName;
console.log(username);

var characterName = "Dr. Fungrec";
var character = "Character: " +
 characterName;
console.log(character);


document.getElementById("username")
 .innerHTML = username;
document.getElementById(
  "character").innerHTML =
 character;
