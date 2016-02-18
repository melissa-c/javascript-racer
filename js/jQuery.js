$(window).load(function() {  
/*
hide round 2 content.
reset all round 1 content to the start state.
*/
var round1Start = function() {
  $("td").removeClass("active");
  $("td:first-child").addClass("active");
  $(".round2").addClass("hidden");

  alert("Welcome to the Presidential Race for the White House.\n\
    \nLEVEL 1\n\n\
    \nUse your keyboard to move the candidates.\n\
    \nPress C to move Clinton.\n\
    \nPress T to move Trump.\n\n\
    \nGood luck, 'Murica!\n\n");
};
round1Start();

//choose length of track
var track = function(){
  var input = prompt("Select a racing distance between 5 and 10", 
  "Type any number between 5 and 10...");

//add extra columns to the track depending on what length was entered.
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
track();

/*
name the keyup function so it can be called to unbind in round 2.
set variables for the current cell to be the active cell and the 
  next cell to be the next sibling.
*/
function r1Keys(e1) {
  var p1Won = ("Clinton won!\n\nCelebrate with the interns!\n\n\
    \nHell, lets see what happens in Level 2!\n\n");

  var p2Won = ("Trump won!\n\nHide in a bunker - the end is nigh!\n\n\
    \nHell, lets see what happens in Level 2!\n\n");

  var current1 = $("#p1 td.active");
  var current2 = $("#p2 td.active");

  var nextCell1 = current1.next();
  var nextCell2 = current2.next();


/*  
keep active cell moving to the next sibling along for the length
  of the row.
player wins when the active cell has no more sibling cells to move to.
*/
  //C is 67
  if(e1.which === 67) {
    if(nextCell1.length){
      $(current1).removeClass("active");
      $(nextCell1).addClass("active");
    } else {
      alert(p1Won);
      round2Start();     
    }
  };

  //T is 84
  if(e1.which === 84) {
    if(nextCell2.length){
      $(current2).removeClass("active");
      $(nextCell2).addClass("active");
    } else {
      alert(p2Won);
      round2Start();
    }
  };
};
$(document).keyup(r1Keys);


// ------------- UNFINISHED CODE----------------

/*-----------ROUND 2---------------

turn off the round 1 keyup events for round 2.
hide round 1 content.
show round 2 content.
reset state of the table to start state with active cell 
  in first column first row (tr:first-child td:first-child).

if p1 won then p1 becomes p3, 
  alert will have clinton info (default),
  table will have clinton image and keycodes.
else p2 becomes p3, 
  alert will have trump info,
  table will have trump image and keycodes.

create array of objects with p1 and p2 info so the details of
  whichever player won round 1 can be entered for player 3.

keycodes:   
  Sanders  S is 83 , D is 68
  Clinton  H is 72 , J is 74
  Trump    T is 84 , Y is 89
*/

/*
var p2img = $("tr.p3.img").src("images/trump.png");
var p2keys = $("td.path").text("T&rarr;<br>Y &darr;");

var p3 = [
  {
  "name": "Clinton",
  "rtKey": "H",
  "dnKey": "J",
  "alertTxt": "Clinton won!\n\nDust off the cigars and celebrate!\n\n\
              \nHell, lets race again!\n\n"
  },
  {
  "name": "Trump",
  "rtKey": "T",
  "dnKey": "Y",
  "alertTxt": "Trump won?!\n\n'Murica, What. Have. You. Done?!\n\n\
              \nHell, we have to race again!\n\n",
  p2img,
  p2keys
  }
  ]
*/

var round2Start = function() {
  $(document).unbind("keyup", r1Keys);
  $("td").removeClass("active");
  $("tr:first-child td:first-child").addClass("active");
  $(".round2").removeClass("hidden");
  $(".round1").addClass("hidden");

  alert("LEVEL 2!\n\n\Fight it out with the Dark Horse Sanders!\n\
    \nUse your keyboard to move the candidates.\n\
    \nEach must STAY WITHIN their GREEN squares.\n\n\
    For " + "    "/*insert p3 name*/ + ":\n\
    Press " + "    "/*insert p3 rtKey*/ + " to move RIGHT,\n\
    Press " + "    "/*insert p3 dnKey*/ + " to move DOWN.\n\n\
    For Sanders:\n\
    Press S to move RIGHT,\n\
    Press D to move DOWN.\n\n\
    \nGood luck, 'Murica!\n\n");
};

/*
name the keyup function so it can be called to unbind for other rounds.
set variables for the current cell to be the active cell and the 
  next cell to be the next sibling row or column.

active cell moves to the next column or row depending on the key pressed
  up to the number of rows or columns available.
  Need to work out how to move to next row.

if cell has class active AND path then keep moving
else alert to say you lose try again and refresh round 2 state.

player wins when the active cell reaches the table's last column and row
  (tr:last-child td:last-child).

alert winner and refresh to start state of round 1.

*/

function r2Keys(e2) {
//   var p4Won = ("Sanders won!\n\nThe Dark Horse slays the naysayers!\n\n\
//     \nHell, lets race again!\n\n");

//   var p3Won = (/*"insert p3 alertTxt"*/);

  var currCell3 = $("table.round2 tr.p3 td.active");
  var nextCell3 = currCell3.next();
  var nextRow3 = $(this).closest("tr").next();

  var currCell4 = $("table.round2 tr.p4 td.active");
  var nextCell4 = currCell4.next();
  var nextRow4 = $(this).closest("tr").next();

// //end of game reset back to round 1 start state.
//   function reset(){
//     location.reload();
//   };

 // S is 83 , D is 68
  if(e2.which === 83) {
    if(nextCell4.length){
      $(currCell4).removeClass("active");
      $(nextCell4).addClass("active");
    }  
  if(e2.which === 68) {
      $(currCell4).removeClass("active");
      $(nextRow4).addClass("active");
    } 
    // else {
    //   alert(p4Won);
    //   reset();     
    // }
  };

 //  Clinton  H is 72 , J is 74
  if(e2.which === 72) {
    if(nextCell3.length){
      $(currCell3).removeClass("active");
      $(nextCell3).addClass("active");
    }  
  if(e2.which === 74) {
      $(currCell3).removeClass("active");
      $(nextRow3).addClass("active");
    } 
    // else {
    //   alert(p4Won);
    //   reset();     
    // }
  };

};
$(document).keyup(r2Keys);

});
