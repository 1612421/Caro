import React, { Component } from 'react';
import io from 'socket.io-client';

import Board from './Board';
import Status from './Status'
import ChatBox from '../containers/ChatBox';
import GameOnlineAction from '../containers/GameOnlineAction';

import '../css/App.css';

const socket = io('http://localhost:3000', {path: '/api/game'});

class Game extends Component {
    componentDidMount(){
        const { startGame } = this.props;

        socket.on('game start', (data) => {
            startGame(data);
        });
    }

    render(){  
        const cells = [...Array(400).keys()];
        const { squares, squaresWinner, xIsNext, haveWinner, history, stepNumber, content, socketId, ...other } = this.props;

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
                    <GameOnlineAction socket={socket}/>
                    {
                        socketId && <ChatBox socket={socket}/>
                    }
                </div>
            </div>
        );
    }
}

export default Game;