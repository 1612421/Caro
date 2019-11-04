import React, { Component } from 'react';
import Square from './Square';



class Board extends Component {

    componentDidMount(){
        const { socket, clickSquare } = this.props;

        socket.on('click square', (index) => {
            clickSquare(index);
        });
    }

    clickSquare = (i) => {
        const { socket, socketId, haveWinner, xIsNext, youAre } = this.props;

        if (!socketId || haveWinner
            || (youAre === 'x' && !xIsNext)
            || (youAre === 'o' && xIsNext)) {
            return;
        }

        socket.emit('click square', i);
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