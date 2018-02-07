import React from 'react';

import Square from './Square.js';
import Status from './Status.js';
import Controls from './Controls.js';

import { emptySquare, boardSize, firstTurn, getEmptyBoard } from '../utils.js';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: getEmptyBoard(),
            nextTurn: 'x',
            win: undefined      // the player who has won
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.getStatus = this.getStatus.bind(this);
        this.checkWin = this.checkWin.bind(this);
    }

    handleClick(index) {
        if (!this.state.win && this.state.squares[index] === emptySquare) {
            let nextTurn = this.state.nextTurn;
            let squares = this.state.squares;

            squares[index] = nextTurn;
            if (nextTurn === 'x') {
                nextTurn = 'o';
            } else {
                nextTurn = 'x';
            }

            const win = this.checkWin();

            this.setState(() => {
                return {
                    squares,
                    nextTurn,
                    win
                };
            });
        }
    }

    handleReset() {
        this.setState(() => {
            return {
                squares: getEmptyBoard(),
                nextTurn: firstTurn,
                win: undefined
            };
        });
    }

    checkWin() {
        // Check rows
        for (let y = 0; y < (boardSize * boardSize); y += boardSize) {
            let value = this.state.squares[y];
            if (value !== emptySquare) {
                let foundLine = true;

                // Start from the left
                for (let x = y; x < y + boardSize; ++x) {
                    if (this.state.squares[x] !== value) {
                        foundLine = false;
                        break;
                    }
                }

                if (foundLine) {
                    // Report horizontal win
                    return value;
                }
            }
        }

        // Check columns
        for (let x = 0; x < boardSize; ++x) {
            let value = this.state.squares[x];
            if (value !== emptySquare) {
                let foundLine = true;

                // Start from the top
                for (let y = x; y < (boardSize * boardSize); y += boardSize) {
                    if (this.state.squares[y] !== value) {
                        foundLine = false;
                        break;
                    }
                }

                if (foundLine) {
                    // Report vertical win
                    return value;
                }
            }
        }

        // Check left diagonal
        let value = this.state.squares[0];      // Start from the top left
        if (value !== emptySquare) {
            let foundLine = true;

            for(let i = 0; i < (boardSize * boardSize); i += (boardSize + 1)) {
                if (this.state.squares[i] !== value) {
                    foundLine = false;
                    break;
                }
            }

            if (foundLine) {
                // Report left diagonal win
                return value;
            }
        }

        // Check right diagonal
        value = this.state.squares[boardSize - 1];      // Start from the top right
        if (value !== emptySquare) {
            let foundLine = true;

            for(let i = boardSize - 1; i < ((boardSize * boardSize) - 1); i += (boardSize - 1)) {
                console.log(i);
                if (this.state.squares[i] !== value) {
                    foundLine = false;
                    break;
                }
            }

            if (foundLine) {
                // Report right diagonal win
                return value;
            }
        }
    }

    getStatus() {
        if (this.state.win) {
            return "Player " + this.state.win + " wins!";
        }

        return "Next turn: " + this.state.nextTurn;
    }

    render() {
        return (
            <div>
                <form>
                <div className="board">
                    {
                        this.state.squares.map((square, index) => {
                            return <Square key={index} index={index} status={square} handleClick={this.handleClick} />;
                        })
                    }
                </div>
                </form>
                <Status text={this.getStatus()} />
                <Controls handleReset={this.handleReset} />
            </div>
        );
    }
}