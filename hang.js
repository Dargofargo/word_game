var $ = function(id) {
  return document.getElementById(id);
};

// adding variables and adding them to id's with in the html code
var game = ["eat", "sleep", "code", "repeat"];

var choice = Math.floor(Math.random() * 4);

var answer = game[choice];

var myLength = answer.length;

var display = [myLength];

var win = myLength;

var letters = answer.split("");

var attemptsLeft = 10;

var output = "";

var userLetter = "";

var setup = function() {
  // adding the lines for each letter
  for (var i = 0; i < answer.length; i++) {
    display[i] = "_ ";

    output = output + display[i];
  }
  // adding the lines to id game in the html code
  document.getElementById("game").innerHTML = output;

  output = "";
}
// allows the user to sumbit their guess
var submit = function(e) {
  e.preventDefault();

  output = "";

  userLetter = $("letter").value;

  $("letter").value = "";
  // lets you input letters to the awsner so you can guess the right ones.
  for (var c = 0; c < answer.length; c++) {
    if (userLetter.toUpperCase() == letters[c].toUpperCase()) {
      display[c] = userLetter.toUpperCase();
      win--;
    }

    output = output + display[c] + " ";
  }
  // calls on the id game in the html so it can be used in the java script.
  document.getElementById("game").innerHTML = output;

  output = "";

  attemptsLeft--;
  // makes the display messages for each id that it calls on when an input is made.
  if (win < 1) {
    document.getElementById("guesses").innerHTML = "YOU WIN!!!";
  } else if (attemptsLeft < 1) {
    document.getElementById("guesses").innerHTML = "YOU LOSE!!!";
  } else {
    document.getElementById("guesses").innerHTML =
      "You have " + attemptsLeft + " guesses left";
  }
}
// what happens when the page window loads
window.onload = setup;
// making function for the id form1 in the html code calling it to the java script
var form1 = document.getElementById("form1");
form1.onsubmit = submit;