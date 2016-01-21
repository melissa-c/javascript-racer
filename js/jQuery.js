// wait until everything on page has loaded
// shorter version of the same code:
// $(function() {
$(document).ready(function() {  
  //run the code

//example:
  // $("h1").click(function() {
  //   $(this).hide();
  // });

// function updatePlayerPosition("player1");


/*
Start state = the only active table cells are the first table 
cells in each row.
*/

$('td').removeClass('active');
$('td:nth-child(1)').addClass('active');


/*
Alert = 
instructions stating the assigned keys to press for each player:
*/

alert("Welcome to the Presidential Race for the White House.\n\
  \n\
  Press C to move Clinton.\n\
  Press T to move Trump.\n\
  \n\
  Good luck, \'Merica!\n\
  \n");


/*
Assign the keys = 
player1_row id with table cell class active will be C (keycode 67), 
player2_row id with table cell class active will be T (keycode 84)
*/



/* 
When an assigned key is pressed =
the table cell in the corresponding player's row changes from an 
active cell to a normal table cell and the next table cell to the 
right becomes an active cell.
*/


// $(document).on("keyup", someFunction)

/*
When the last table cell in one of the player's rows becomes an active 
cell the game ends and the key presses are disabled.
*/

/*
The player whose row had its last table cell become an active cell 
is the winner. 
*/

/*
Alert = 
If player1 wins: "Clinton won! Celebrate with the interns!"
If player2 wins: "Trump won! Find a bunker - the end is nigh!" 
Each alert also states that they can play again. 
*/

/*
The table reverts back to its start state.
*/


});
