import React, { Component } from 'react';
import io from 'socket.io-client';
import  { toast } from 'react-toastify';

import BoardOnline from '../containers/BoardOnline';
import Status from '../containers/Status'
import ChatBox from '../containers/ChatBox';
import MovesOnline from '../containers/MovesOnline';
import history from '../history';

import '../css/App.css';

const socket = io('http://localhost:3000', {path: '/api/game'});

class Game extends Component {
    componentDidMount(){
        const { startGame, leaveRoom, isAuthenticated } = this.props;
        
        if (!isAuthenticated) {
            history.push('/');
        }

        socket.open();

        socket.on('game start', (data) => {
            startGame(data);
            toast.success('Find out enemy. Game start!');
        });
        socket.on('game end', (senderID) => {
            const socketId = this.getSocketId();

            if (socketId !== senderID) {
                toast('Enemy has left the game');
            }

            leaveRoom();
        });

        socket.on('disconnect', () => {
            leaveRoom();
            toast.error('Disconnected to server');
        });
    }

    componentWillUnmount() {
        socket.removeAllListeners();
        socket.close();
    }

    getSocketId = () => {
        const { socketId } = this.props;
        return socketId;
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
                    <MovesOnline socket={socket}/>
                    {
                        socketId && <ChatBox socket={socket}/>
                    }
                </div>
            </div>
        );
    }
}

export default Game;