"use strict";
var $ = function(id) { return document.getElementById(id); };

/**
 * Clears any previous scores and starts a new game.
 */
var newGame = function() {
    game.clearScores();
    game.setInitialPlayer();
    if (game.isValid()) {
        $("turn").style.display = "block";
        $("turn").firstChild.nodeValue = "";
    }
};
/**
 * Calls the take turn function to take the current players turn
 */
var takeTurn = function() {
    if (game.isValid()) {
        game.takeTurn();
    }
};
/**
 * Calls the hold function to hold the current players score
 * After holding, changes the player and checks if there are any winners
 */
var holdTurn = function() {
    if (game.isValid()) {
        game.hold();
        game.changePlayer();
        if(game.checkWinner() != "none") {
            $("turn").firstChild.nodeValue = (game.checkWinner() + " won!");
        }
    }
};
window.onload = function() {
    $("new_game").onclick = newGame;
    $("roll").onclick = takeTurn;
    $("hold").onclick = holdTurn;
    $("player1").focus();
    
    // call the load method and pass it the page elements the game object needs
    game.load($("player1"), $("player2"), $("score1"), $("score2"), $("current"), $("die"), $("total"));
};