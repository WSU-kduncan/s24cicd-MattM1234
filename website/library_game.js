var game = {
    player1: null, // these properties will be set by the load method  
    player2: null, 
    currentPlayer: null, 
    load: function(name1Node, name2Node, score1Node, score2Node, currentNode, dieNode, totalNode) {
        this.player1 = {
            name: name1Node,
            score: score1Node,
            pig: new Pig()
        };
        this.player2 = {
            name: name2Node,
            score: score2Node,
            pig: new Pig()
        };
        this.currentPlayer = {
            name: currentNode,
            roll: dieNode,
            total: totalNode,
            pig: this.player1.pig  // initial value - will be changed by changePlayer method
        };
        return this;
    },
    isValid: function() {
        if (this.player1.name.value === "" || this.player2.name.value === "") {
            return false;
        } else { 
            return true; 
        }
    },
    clearScores: function() {
        // reset player1 score value and reset its Pig object
        this.player1.pig.reset();
        this.player1.score.value = 0;
        // reset player2 score value and reset its Pig object
        this.player2.pig.reset();
        this.player2.score.value = 0;
    },
    setInitialPlayer: function() {
        // if game is valid set initial player by calling the changePlayer method
        if (this.isValid()) {
            this.changePlayer();
        }
    },
    takeTurn: function() {
        // use the Pig object of the currentPlayer property to take a turn
        this.currentPlayer.pig.takeTurn()
        if(this.currentPlayer.pig.turn != 0) {
            this.currentPlayer.roll.value = this.currentPlayer.pig.roll;
            this.currentPlayer.total.value = this.currentPlayer.pig.roll + parseInt(this.currentPlayer.total.value);
        } else {
            this.changePlayer();
        }
    },
    changePlayer: function() {
        // display result of last roll in the currentPlayer display properties
        this.currentPlayer.roll.value = this.currentPlayer.pig.roll;
        this.currentPlayer.total.value = 0;
        
        // if current player's turn is zero, need to switch players
        // and start new turn
        if(this.currentPlayer.pig.turn === 0) {
            if(this.currentPlayer.name.textContent === this.player1.name.value) {
                this.currentPlayer.name.textContent = this.player2.name.value;
                this.currentPlayer.pig = this.player2.pig;
            } else {
                this.currentPlayer.name.textContent = this.player1.name.value;
                this.currentPlayer.pig = this.player1.pig;
            }
        }
    },
    hold: function() {
        // use the currentPlayer Pig object to hold
        this.currentPlayer.pig.hold();
        // determine whether player1 or player2 are the current player, then
        // update that player's score with the current total
        if (this.currentPlayer.name.textContent === this.player1.name.value) {
            this.player1.score.value = this.player1.pig.total;
        } else {
            this.player2.score.value = this.player2.pig.total;
        }
    },
    checkWinner: function() {
        // check the players' Pig objects to see if either is at or above 100
        // total points. If so, return that player's name. Otherwise, return 
        // the string "none".
        if (this.player1.pig.total >= 100) {
            return this.player1.name.value;
        } else if (this.player2.pig.total >= 100) {
            return this.player2.name.value;
        } else {
            return "none";
        }
    }
};