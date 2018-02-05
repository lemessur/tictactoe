import React from 'react';

import Square from './Square.js';
import Controls from './Controls.js';

import { emptySquare, getEmptyBoard } from '../utils.js';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: getEmptyBoard(),
            nextTurn: 0
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleClick(index) {
        if (this.state.squares[index] === emptySquare) {
            let nextTurn = this.state.nextTurn;
            let status = emptySquare;
            if (nextTurn === 0) {
                status = 'x';
            } else if (nextTurn === 1) {
                status = 'o';
            }

            nextTurn++;
            if (nextTurn > 1) {
                nextTurn = 0;
            }

            let squares = this.state.squares;
            squares[index] = status

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
                nextTurn: 0
            };
        });
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
                <Controls handleReset={this.handleReset} />
            </div>
        );
    }
}