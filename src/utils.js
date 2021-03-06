const boardSize = 3;
const emptySquare = 'emptySquare';
const firstTurn = 'x';

const getEmptyBoard = () => {
    return (new Array(boardSize * boardSize)).fill(emptySquare);
}

module.exports = {
    boardSize,
    emptySquare,
    firstTurn,
    getEmptyBoard
};