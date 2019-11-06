import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {

    clickSquare = (i) => {
        const { clickSquare, playByBot, youAre, xIsNext, squares } = this.props;

        if ((youAre === 'x' && !xIsNext) || (youAre === 'o' && xIsNext)){
            return;
        }

        if (squares[i]) {
            return;
        }

        clickSquare(i);
        playByBot();
    }

    render() {
        const arrRows = [...Array(20).keys()];
        const { cells, squares, squaresWinner } = this.props;
        let counter = 1;
        return (
            <div className="board">
                {
                    arrRows.map((row) => 
                        <div key={row.toString()} className="board-row">
                            {
                                // eslint-disable-next-line no-plusplus
                                cells.slice(row * 20, counter++ * 20)
                                    .map((cellID) =>
                                        <Square key={cellID.toString()}
                                                value={squares[cellID]}
                                                moreClassName={squaresWinner.includes(cellID)? 'winner' : ''}
                                                onClick={() => this.clickSquare(cellID)}/>
                                    )
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Board;