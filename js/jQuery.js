$(document).ready(function() {  

var startState = function() {
  $("td").removeClass("active");
  $("td:first-child").addClass("active");

  alert("Welcome to the Presidential Race for the White House.\n\
    \nPress C to move Clinton.\n\nPress T to move Trump.\n\n\
    \nGood luck, \'Murica!\n\n");
};
startState();


var lengthOfTrack = function(){
  var input = prompt("Select a racing distance between 5 and 10", 
  "Type any number between 5 and 10...");

  if(input > 5 || input < 10){
    for(var i = 5; i < 10; i++){
      $("#player1_row").append($("#player1_row td:last-child").clone(true));
      $("#player2_row").append($("#player2_row td:last-child").clone(true));
    } 
  } else {
    alert("You have not selected a correct racing distance.\n\
      \nThe distance is set to 5.\n\n");
  };
};

lengthOfTrack();



$(document).on("keyup", function(e){

  var p1Won = ("Clinton won!\n\nCelebrate with the interns!\n\n\
    \nHell, lets race again!\n\n");

  var p2Won = ("Trump won!\n\nHide in a bunker \- the end is nigh!\n\n\
    \nHell, lets race again!\n\n");

  var current1 = $("#player1_row td.active");
  var current2 = $("#player2_row td.active");

  var nextCell1 = current1.next();
  var nextCell2 = current2.next();

  if(e.which === 67) {
    if(nextCell1.length){
      $(current1).removeClass("active");
      $(nextCell1).addClass("active");
    } else {
      alert(p1Won);
      startState();
    }
  };

  if(e.which === 84) {
    if(nextCell2.length){
      $(current2).removeClass("active");
      $(nextCell2).addClass("active");
    } else {
      alert(p2Won);
      startState();
    }
  };
});
});

// wait until everything on page has loaded
/* shorter version of the same code:
$(function() {
*/

/*
Start state -----------------------------------------
Remove active class from all table cells.
Add active class to the first table cells in each row.
Alert =
Instructions stating the assigned keys to press for each player.
*/

/*
Move players ----------------------------------------
Assign the keys =
player1 is C (keycode 67),
player2 is T (keycode 84).

When an assigned key is pressed =
Find the active cell in the corresponding player's row.
Remove the active class from that cell.
Find the next cell to the right.
Add the active class to that cell.
*/

/*
Win state ----------------------------------------------------
When an active cell in a player's row has no more cells to the right.
Disable key press for the table.
Alert =
The player who had no more table cells to the right of the active cell
is the winner.
*/

/*
If player1 wins then alert player1 won and play again.
Else alert player2 won and play again.
*/

/*
End State --------------------------------------------
The table reverts back to its start state.
*/
