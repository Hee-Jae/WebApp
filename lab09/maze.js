/* CSE3026 : Web Application Development
 * Lab 09 - Maze
 */
"use strict";
var loser = null;  // whether the user has hit a wall
var start = false;

window.onload = function() {
    $("start").onclick = function(){
        startClick();
        var walls = $$(".boundary");
        for(var i=0; i<walls.length-1; i++){
            walls[i].onmouseover = overBoundary;
        }
        var body = $$("body");
        for(var i=0;i<body.length;i++){
          body[i].onmouseover = overBody;
        }
        $("end").onmouseover = overEnd;
    }
};

// called when mouse enters the walls; 
// signals the end of the game with a loss
function overBoundary(event) {
    if(start){
        var walls = $$(".boundary");
        for(var i=0; i<walls.length-1; i++){
            walls[i].addClassName("youlose");
        }
        loser = true;
        overEnd();
    }
    
}

// called when mouse is clicked on Start div;
// sets the maze back to its initial playable state
function startClick() {
    start = true;
    $("status").innerHTML = "Go to End, Don't touch Wall!";
    var walls = $$(".boundary");
    for(var i=0; i<walls.length-1; i++){
        walls[i].removeClassName("youlose");
    }
    loser = null;
}

// called when mouse is on top of the End div.
// signals the end of the game with a win
function overEnd() {
    if(loser){
        $("status").innerHTML = "You lose! :(";
    }
    else{
        $("status").innerHTML = "You win! :)";
    }
    start = false;
}

// test for mouse being over document.body so that the player
// can't cheat by going outside the maze
function overBody(event) {
    if(start && (Event.element(event).id != "maze") && (Event.element(event).id != "end")){
        overBoundary();
      }
}
