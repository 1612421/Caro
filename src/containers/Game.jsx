import React from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import Status from '../components/Status'
import Moves from '../components/Moves';
import GameAction from '../actions/GameAction';

// eslint-disable-next-line import/imports-first
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

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => ({
    createNewGame: () => {
        dispatch(GameAction.createNewGame());
    },

    clickSquare: (i) => {
        dispatch(GameAction.clickSquare(i));
    },

    jumToStepNumber: (i) => {
        dispatch(GameAction.jumpToStepNumber(i));
    },

    sort: () => {
        dispatch(GameAction.sort());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);