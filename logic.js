// Create an object function for: the gameboard, the players, a game object to control the flow of the game itself
// Get a working console game first

const gameBoard = (function () {
    let board = [null, null, null, null, null, null, null, null, null]
    console.log("Board created: ", board);

    function displayBoard() {
        console.log(board);
    }

    function placeMarker(player) {
        marker = player.marker
        this.innerHTML = `${marker}`;
    }

    function checkForTie() {
        if (board.every(item => item !== null)) {
            return true;
        }
        else {
            return false;
        }
    }

    function checkForWin() {

    }

    function clearBoard() {
        board = [null, null, null, null, null, null, null, null, null];
        console.log("Board reset");
    }

    function iterateScore() {

    }
    return { displayBoard, placeMarker, checkForTie, checkForWin, clearBoard }
}());


function createPlayer(name, marker, score) {
    function getPlayerInfo() {
        return `${name} = ${marker}`;
    }
    const updateScore = () => score++;
    const displayScore = () => score;
    return { getPlayerInfo, name, marker, updateScore, displayScore };
}

function gameFlow() {
    // Create player 1 object
    let name = prompt("Player 1, what is your name?: ", "Player 1");
    let marker = prompt(`${name}, what marker do you choose, X or O?: `, "X").toUpperCase();
    const player1 = createPlayer(name, marker, 0);

    // Create player 2 object
    name = prompt("Player 2, what is your name?: ", "Player 2");
    marker2 = (marker === "X") ? "O" : "X"; // use ternary operator to condense
    const player2 = createPlayer(name, marker2, 0);
    console.log(`${player1.getPlayerInfo()} || ${player2.getPlayerInfo()}`);

    // Decide the current player (current player will always be "X")
    let currentPlayer = (player1.marker === "X") ? player1 : player2;
    console.log(currentPlayer.name);

    // Gameplay loop until win or tie
    while (true) {
        gameBoard.displayBoard();

        // Place current player's marker based on where they clicked
        gameBoard.placeMarker(currentPlayer);

        // check for a winner
        gameBoard.checkForWin();

        // check for a tie
        gameBoard.checkForTie();

        // Iterate the score: 
        gameBoard.iterateScore();

    }



    //     // Create a function here to handle player moves, code a separate function that this function references
    //     // calls to check if a player has won, starting after 3 total moves.
    //     console.log("Player 1, make your move!");

    //     p = prompt(`Pick your location ${player1.name} (from 1 to 9, numbering from top left): `) - 1;
    //     let row = Math.floor(p / 3);
    //     let col = p % 3;

    //     board[row][col] = `${player1.marker}`;
    //     console.log(board);
}


let = gameButtons = document.querySelectorAll(".board div");
gameButtons.forEach(btn => btn.addEventListener("click", gameBoard.placeMarker));
