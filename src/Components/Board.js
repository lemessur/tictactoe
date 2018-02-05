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
            nextTurn: 'x'
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleClick(index) {
        if (this.state.squares[index] === emptySquare) {
            let nextTurn = this.state.nextTurn;
            let squares = this.state.squares;

            squares[index] = nextTurn;
            if (nextTurn === 'x') {
                nextTurn = 'o';
            } else {
                nextTurn = 'x';
            }

            this.setState(() => {
                return {
                    squares,
                    nextTurn
                };
            });
        }
    }

    handleReset() {
        this.setState(() => {
            return {
                squares: getEmptyBoard(),
                nextTurn: firstTurn
            };
        });
    }

    // checkWin() {
    //     // Check rows
    //     let value = emptySquare;
    //     for (y = 0; y < boardSize; ++y) {

    //     }
    // }

    getStatus() {
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