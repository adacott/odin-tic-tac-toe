// Create an object function for: the gameboard, the players, a game object to control the flow of the game itself
// Get a working console game first

const gameBoard = (function () {
    let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    console.log("Board created: ", board);

    function displayBoard() {
        console.log(board);
    }

    function placeMarker(player) {
        player1 = createPlayer("Adam", "X");
        marker = player1.marker
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

    function checkForWin(player1, player2) {
        // check columns
        for (let i = 0; i < 3; i++) {
            if (board[0][i] === board[1][i] && board[1][i] === board[2][j]) {
                if (board[0][i] === player1.marker) {
                    console.log("Player 1 wins!");
                    player1.updateScore();
                }
                else {
                    console.log("Player 2 wins!");
                    player2.updateScore();
                }
            }
        }

        // check rows
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                if (board[i][0] === player1.marker) {
                    console.log("Player 1 wins!");
                    player1.updateScore();
                }
                else {
                    console.log("Player 2 wins!");
                    player2.updateScore();
                }
            }
        }

        // check diagonals
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            if (board[0][0] === player1.marker) {
                console.log("Player 1 wins!");
                player1.updateScore();
            }
            else {
                console.log("Player 2 wins!");
                player2.updateScore();
            }
        }
        else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            if (board[0][2] === player1.marker) {
                console.log("Player 1 wins!");
                player1.updateScore();
            }
            else {
                console.log("Player 2 wins!");
                player2.updateScore();
            }
        }


    }

    function clearBoard() {
        board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        console.log("Board reset");
    }
    return { displayBoard, placeMarker, checkForTie, checkForWin, clearBoard }
}());

// factory function to create players given a marker
function createPlayer(mark) {
    createPlayer.count = (createPlayer.count || 0) + 1;
    const name = `Player ${createPlayer.count}`;
    const marker = mark;
    const updateScore = () => score++;
    const displayScore = () => score;
    console.log(`Name is ${name} and marker is: ${marker}`);

    return { name, marker, updateScore, displayScore };
}

// function to create both players in a game after the initial click
function createPlayers() {
    player1 = createPlayer(`${this.innerHTML}`);
    marker = (player1.marker === "X") ? "O" : "X";
    player2 = createPlayer(marker);
}

function gameFlow() {



    // Create player 1 object
    // let name = prompt("Player 1, what is your name?: ", "Player 1");
    // let marker = prompt(`${name}, what marker do you choose, X or O?: `, "X").toUpperCase();
    // const player1 = createPlayer(name, marker, 0);

    // // Create player 2 object
    // name = prompt("Player 2, what is your name?: ", "Player 2");
    // marker2 = (marker === "X") ? "O" : "X"; // use ternary operator to condense
    // const player2 = createPlayer(name, marker2, 0);
    // console.log(`${player1.getPlayerInfo()} || ${player2.getPlayerInfo()}`);

    // // Decide the current player (current player will always be "X")
    // let currentPlayer = (player1.marker === "X") ? player1 : player2;
    // console.log(currentPlayer.name);

    // // Gameplay loop until win or tie
    // while (true) {
    //     gameBoard.displayBoard();

    //     // Place current player's marker based on where they clicked
    //     gameBoard.placeMarker(currentPlayer);

    //     // check for a winner
    //     gameBoard.checkForWin();

    //     // check for a tie
    //     gameBoard.checkForTie();

    //     // Iterate the score: 
    //     gameBoard.iterateScore();

}



//     // Create a function here to handle player moves, code a separate function that this function references
//     // calls to check if a player has won, starting after 3 total moves.
//     console.log("Player 1, make your move!");

//     p = prompt(`Pick your location ${player1.name} (from 1 to 9, numbering from top left): `) - 1;
//     let row = Math.floor(p / 3);
//     let col = p % 3;

//     board[row][col] = `${player1.marker}`;
//     console.log(board);

let = gameButtons = document.querySelectorAll(".board div");
gameButtons.forEach(btn => btn.addEventListener("click", gameBoard.placeMarker));

const markerSelection = document.querySelectorAll(".markers div");
markerSelection.forEach(mk => mk.addEventListener("click", createPlayers));
