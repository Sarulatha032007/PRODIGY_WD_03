function aiMove() {

    // 1. Try to Win
    for (let combo of wins) {

        let [a, b, c] = combo;

        let values = [board[a], board[b], board[c]];

        if (
            values.filter(v => v === "O").length === 2 &&
            values.includes("")
        ) {

            let emptyIndex = combo[values.indexOf("")];

            makeMove(emptyIndex, "O");
            return;
        }
    }

    // 2. Block Player Win
    for (let combo of wins) {

        let [a, b, c] = combo;

        let values = [board[a], board[b], board[c]];

        if (
            values.filter(v => v === "X").length === 2 &&
            values.includes("")
        ) {

            let emptyIndex = combo[values.indexOf("")];

            makeMove(emptyIndex, "O");
            return;
        }
    }

    // 3. Take Center
    if (board[4] === "") {
        makeMove(4, "O");
        return;
    }

    // 4. Take Corner
    const corners = [0, 2, 6, 8];

    let availableCorners = corners.filter(
        index => board[index] === ""
    );

    if (availableCorners.length > 0) {

        let randomCorner =
            availableCorners[
                Math.floor(Math.random() * availableCorners.length)
            ];

        makeMove(randomCorner, "O");
        return;
    }

    // 5. Take Any Empty Cell
    let emptyCells = [];

    board.forEach((cell, index) => {
        if (cell === "") {
            emptyCells.push(index);
        }
    });

    if (emptyCells.length > 0) {

        let randomCell =
            emptyCells[
                Math.floor(Math.random() * emptyCells.length)
            ];

        makeMove(randomCell, "O");
    }
}