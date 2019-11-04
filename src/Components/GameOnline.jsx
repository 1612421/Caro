import React, { Component } from 'react';
import io from 'socket.io-client';

import BoardOnline from '../containers/BoardOnline';
import Status from '../containers/Status'
import ChatBox from '../containers/ChatBox';
import GameOnlineAction from '../containers/GameOnlineAction';

import '../css/App.css';

const socket = io('http://localhost:3000', {path: '/api/game'});

class Game extends Component {
    componentDidMount(){
        const { startGame, leaveRoom } = this.props;

        socket.on('game start', (data) => {
            startGame(data);
        });
        socket.on('game end', () => {
            leaveRoom();
        });
    }

    render(){  
        const cells = [...Array(400).keys()];
        const { socketId} = this.props;

        return(
            <div className="game">
                <div className="game-board">
                    <BoardOnline cells={cells}
                                socket={socket}/>
                </div>
                <div className="game-info">
                    <Status />
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