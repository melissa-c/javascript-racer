$(window).load(function() {  

var round1Start = function() {
  $("td").removeClass("active");
  $("td:first-child").addClass("active");
  $(".round2").addClass("hidden");

  alert("Welcome to the Presidential Race for the White House.\n\
    \nUse your keyboard to move the candidates.\n\n\
    \nPress C to move Clinton.\n\nPress T to move Trump.\n\n\
    \nGood luck, \'Murica!\n\n");
};
round1Start();


var lengthOfTrack = function(){
  var input = prompt("Select a racing distance between 5 and 10", 
  "Type any number between 5 and 10...");

  if(input >= 5 && input <= 10){
    for(var i = 5; i < input; i++){
      $("#p1").append($("#p1 td:last-child").clone(true));
      $("#p2").append($("#p2 td:last-child").clone(true));
    } 
  } else {
    alert("You have not selected a correct racing distance.\n\
      \nThe distance is set to 5.\n\n");
  };
};
lengthOfTrack();



$(document).on("keyup", function(e){

  var p1Won = ("Clinton won!\n\nCelebrate with the interns!\n\n\
    \nHell, lets see what happens in Level 2!\n\n");

  var p2Won = ("Trump won!\n\nHide in a bunker \- the end is nigh!\n\n\
    \nHell, lets see what happens in Level 2!\n\n");

  var current1 = $("#p1 td.active");
  var current2 = $("#p2 td.active");

  var nextCell1 = current1.next();
  var nextCell2 = current2.next();


  //C is 67
  if(e.which === 67) {
    if(nextCell1.length){
      $(current1).removeClass("active");
      $(nextCell1).addClass("active");
    } else {
      alert(p1Won);
round2Start();
      
    }
  };

  //T is 84
  if(e.which === 84) {
    if(nextCell2.length){
      $(current2).removeClass("active");
      $(nextCell2).addClass("active");
    } else {
      alert(p2Won);
round2Start();
    }
  };
});

var round2Start = function() {
  $("td").removeClass("active");
  $("tr:first-child td:first-child").addClass("active");
  $(".round1").addClass("hidden");
  $(".round2").removeClass("hidden");

  alert("Fight it out with the Dark Horse in Level 2!\n\
    \nUse your keyboard to move the candidates.\n\n\
    \nThey must stay within the GREEN squares.\n\n\
    \nFor Clinton, press H to move her RIGHT,\n\
    \nand press J to move her DOWN.\n\
    \n\nFor Sanders, press S to move him RIGHT,\n\
    \nand press A to move him DOWN.\n\n\
    \nGood luck, \'Murica!\n\n");
};

//S is 83
//B is 



//   function reset(){
//     location.reload();
//   };
//       reset();


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
