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
    let score = 0;

    const updateScore = () => score++;
    const displayScore = () => score;

    console.log(`Name is ${name} and marker is: ${marker}`);

    return { name, marker, updateScore, displayScore };
}

// function to create both players in a game after the initial click
function createPlayers() {
    let player1 = createPlayer(`${this.innerHTML}`);
    let marker = (player1.marker === "X") ? "O" : "X";
    let player2 = createPlayer(marker);

    const selection = document.querySelector(".selection");
    selection.style.visibility = "hidden";

    return { player1, player2 };
}

function gameFlow() {

}


// let = gameButtons = document.querySelectorAll(".board div");
// gameButtons.forEach(btn => btn.addEventListener("click", gameBoard.placeMarker));

const markerSelection = document.querySelectorAll(".markers div");
markerSelection.forEach(mk => mk.addEventListener("click", createPlayers));