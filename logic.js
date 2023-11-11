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

    function placeMarker(player, location, event) {
        mark = player.marker
        event.innerHTML = `${mark}`;
        const row = Math.floor(location / 3);
        const col = location % 3;
        event.removeEventListener("click", gameFlow);

        board[row][col] = mark;
    }

    function checkForTie() {
        if (board.every(row => row.every(cell => cell !== null))) {
            console.log("It was a tie!");
            return true;
        }
    }

    function checkForWin() {
        // check columns
        for (let i = 0; i < 3; i++) {
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                if (board[0][i] === player1.marker) {
                    console.log("Player 1 wins!");
                    player1.updateScore();
                    return true;
                }
                else if (board[0][i] === player2.marker) {
                    console.log("Player 2 wins!");
                    player2.updateScore();
                    return true;
                }
            }
        }

        // check rows
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                if (board[i][0] === player1.marker) {
                    console.log("Player 1 wins!");
                    player1.updateScore();
                    return true;
                }
                else if (board[i][0] === player2.marker) {
                    console.log("Player 2 wins!");
                    player2.updateScore();
                    return true;
                }
            }
        }

        // check diagonals
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === player1.marker) {
            console.log("Player 1 wins!");
            player1.updateScore();
            return true;
        }
        else if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === player2.marker) {
            console.log("Player 2 wins!");
            player2.updateScore();
            return true;
        }

        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] === player1.marker) {
            console.log("Player 1 wins!");
            player1.updateScore();
            return true;
        }
        else if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] === player2.marker) {
            console.log("Player 2 wins!");
            player2.updateScore();
            return true;
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
    let score = 0;

    const updateScore = () => score++;
    const displayScore = () => score;

    return { name, marker, updateScore, displayScore };
}

// function to create both players in a game after the initial click
function createPlayers() {
    console.log(this.innerHTML);
    player1 = createPlayer(`${this.innerHTML}`);
    let mk = (player1.marker === "X") ? "O" : "X";
    player2 = createPlayer(mk);

    const selection = document.querySelector(".selection");
    selection.style.visibility = "hidden";
}

function gameFlow() {
    currentPlayer = (player1.marker === turn) ? player1 : player2;
    loc = this.dataset.indexNumber;
    gameBoard.placeMarker(currentPlayer, loc, this);
    gameBoard.displayBoard();
    turn = (turn === "X") ? "O" : "X";

    if (!gameBoard.checkForWin()) {
        gameBoard.checkForTie();
    }

}

let player1, player2, turn = "X", currentPlayer;

let = gameButtons = document.querySelectorAll(".board div");
gameButtons.forEach(btn => btn.addEventListener("click", gameFlow));

const markerSelection = document.querySelectorAll(".markers div");
markerSelection.forEach(mk => mk.addEventListener("click", createPlayers));

