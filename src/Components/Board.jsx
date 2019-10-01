import React, { Component } from 'react';
import Square from './Square';

class Board extends Component{
    arrRows = [...Array(20).keys()];

    render(){
        const { cells, squares, squaresWinner, ...other } = this.props;
        let counter = 1;
        return (
            <div className="board">
                {
                    this.arrRows.map((row) => 
                        <div key={row.toString()} className="board-row">
                            {
                                // eslint-disable-next-line no-plusplus
                                cells.slice(row * 20, counter++ * 20)
                                    .map((cellID) =>
                                        <Square key={cellID.toString()}
                                                value={squares[cellID]}
                                                moreClassName={squaresWinner.includes(cellID)? 'winner' : ''}
                                                onClick={() => other.onClick(cellID)}/>
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