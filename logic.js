// Create an object function for: the gameboard, the players, a game object to control the flow of the game itself
// Get a working console game first

const gameBoard = (function () {
    function createBoard() {
        let board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
        console.log("Board created: ", board);
        return board
    };
    return { createBoard };
}());

function createPlayer(name, marker) {
    function getPlayerInfo() {
        return `${name} = ${marker}`;
    }
    return { getPlayerInfo };
}

function game() {
    gameBoard.createBoard();

    // Create player 1 object
    let name = prompt("Player 1, what is your name?: ", "Player 1");
    let marker = prompt(`${name}, what marker do you choose, X or O?: `, "X").toUpperCase();
    const player1 = createPlayer(name, marker);

    // Create player 2 object
    name = prompt("Player 2, what is your name?: ", "Player 2");
    if (marker == "X") {
        marker2 = "O";
    }
    else {
        marker2 = "X";
    }
    const player2 = createPlayer(name, marker2);
    console.log(`${player1.getPlayerInfo()} || ${player2.getPlayerInfo()}`);




}
