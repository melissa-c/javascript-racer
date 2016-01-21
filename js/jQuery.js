// wait until everything on page has loaded
$(document).ready(function() {  
/* shorter version of the same code:
$(function() {  */

  //run the code
// function updatePlayerPosition("player1");

/*
Start state = 
Remove active class from all table cells.
Add active class to the first table cells in each row.
Alert = 
Instructions stating the assigned keys to press for each player.
*/
var startState = function() {
  $("td").removeClass("active");
  $("td:first-child").addClass("active");
  
  alert("Welcome to the Presidential Race for the White House.\n\
    \nPress C to move Clinton.\nPress T to move Trump.\n\
    \nGood luck, \'Merica!\n\n");
};
startState();


/*
Assign the keys =
player1 is C (keycode 67),
player2 is T (keycode 84).

When an assigned key is pressed =
Find the active cell in the corresponding player's row.
Remove the active class from that cell.
Find the next cell to the right.
Add the active class to that cell.
*/


$(document).on("keyup", function(e){

    if(e.which === 67) {
    var move1 = $("#player1_row td.active");
    $(move1).removeClass("active");
      $(move1).next().addClass("active");
    };

    if(e.which === 84) {
    var move2 = $("#player2_row td.active");
    $(move2).removeClass("active");
      $(move2).next().addClass("active");
    };

  });

    


/*
Win state =
When an active cell in a player's row has no more cells to the right.
Disable key press for the table.

Alert =
The player who had no more table cells to the right of the active cell
is the winner. 
*/


var winState = function(){
/*
If player1 wins then alert player1 won and play again.
Else alert player2 won and play again.
*/
  
var clintonWon = ("Clinton won! Celebrate with the interns!\n\
  \nHell, lets race again!\n\n");
alert(clintonWon);


var trumpWon = ("Trump won! Hide in a bunker \- the end is nigh!\n\
  \nHell, lets race again!\n\n");
alert(trumpWon);

};

winState();


//The table reverts back to its start state.

startState();

});
