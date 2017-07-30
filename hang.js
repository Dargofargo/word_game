var $ = function(id) {

return document.getElementById(id);

}

var game = ["eat", "sleep", "code", "repeat"]

var choice = Math.floor(Math.random()*4);

var answer = game[choice];

var myLength = answer.length;

var display=[myLength];

var win = myLength;

var letters = answer.split('');

var attemptsLeft= 10;

var output="";

var userLetter="";

var setup = function()

{

for (var i=0; i< answer.length; i++)

{

display[i] = "_ ";

output = output + display[i];

}

document.getElementById("game").innerHTML = output;

output ="";

}

var submit = function()

{

output = "";

userLetter=$("letter").value;

$("letter").value ="";

for (var c= 0; c< answer.length; c++)

{

if (userLetter.toUpperCase() == letters[c])

{

display[c] = userLetter.toUpperCase();
win--;

}

output = output + display[c] + " ";

 
}
 
document.getElementById("game").innerHTML = output;

output="";

attemptsLeft--;

if (win < 1)

{

document.getElementById("guesses").innerHTML ="YOU WIN!!!";

}

else if (attemptsLeft < 1)

}

document.getElementById("guesses").innerHTML ="YOU LOSE!!!";

}

else

{

document.getElementById("guesses").innerHTML ="You have " + attemptsLeft + " guesses left";

}

}


window.onload = function()
{
setup();
$("submit").onclick = submit;
}