import React from 'react';
import Board from './Board';
import Status from './Status'
import Moves from './Moves';

import '../css/App.css';

const Game = (props) => {
    const cells = [...Array(400).keys()];
    const { squares, squaresWinner, xIsNext, haveWinner, history, stepNumber, content, ...other } = props;

    return(
        <div className="game">
            <div className="game-board">
                <Board cells={cells} 
                        squares={squares}
                        squaresWinner={squaresWinner}
                        onClick={other.clickSquare}/>
            </div>
            <div className="game-info">
                <Status xIsNext={xIsNext}
                        haveWinner={haveWinner}/>
                <Moves createNewGame={other.createNewGame}
                        history={history}
                        stepNumber={stepNumber}
                        onClick={other.jumToStepNumber}
                        content={content}
                        sort={other.sort} />
            </div>
        </div>
    );
}

export default Game;