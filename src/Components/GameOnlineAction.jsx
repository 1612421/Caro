import React, { Component } from 'react';
import { toast } from 'react-toastify';

class GameOnlineAction extends Component {

    findEnemy = () => {
        const { socket, invertFindingEnemyStatus, myUsername, myAvatar, isFindingEnemy } = this.props;

        if (socket.disconnected){
            toast.error('Disconnected to server');
            return;
        }

        if (isFindingEnemy) {
            socket.emit('leave lobby');
        } else {
            socket.emit('lobby', {
                username: myUsername,
                avatar: myAvatar
            });
        }
        
        invertFindingEnemyStatus();
    }

    leaveRoom = () => {
        const { leaveRoom, socket } = this.props;
        socket.emit('leave room');
        leaveRoom();
    }

    surrender = () => {
        const { socket, haveWinner } = this.props;

        if (!haveWinner) {
            socket.emit('surrender');
        }
    }

    suggestDrawn = () => {
        const { socket, haveWinner, isBusy, invertBusyStatus } = this.props;

        if (!haveWinner) {

            if (isBusy) {
                toast.error('Wait for enemy reply before send suggest again');
                return;
            }

            socket.emit('drawn');
            invertBusyStatus();
            toast.success('Suggest drawn game successfully. Waiting for enemy reply');
        }
    }

    suggestNewGame = () => {
        const { socket, isBusy, invertBusyStatus } = this.props;

        if (isBusy) {
            toast.error('Wait for enemy reply before send suggest again');
            return;
        }

        socket.emit('suggest new game');
        invertBusyStatus();
        toast.success('Suggest new game successfully. Waiting for enemy reply');
    }

    suggestUndo = () => {
        const { socket, isBusy, invertBusyStatus, haveWinner, stepNumber } = this.props;

        if (haveWinner) {
            return;
        }

        if (stepNumber === 0){
            return;
        }

        if (isBusy) {
            toast.error('Wait for enemy reply before send suggest again');
            return;
        }

        socket.emit('suggest undo');
        invertBusyStatus();
        toast.success('Suggest undo successfully. Waiting for enemy reply');
    }

    renderBtnFindEnemy = () => {
        const { textOfFindEnemyBtn } = this.props;

        return (
            <li>
                <button type="button" className="btn btn-danger btn-block btn-text-big"
                        onClick={this.findEnemy}>
                    {textOfFindEnemyBtn}
                </button>
            </li>
        );
    }

    renderBtnWhenConnected = () => {

        return (
            <>
                <li>
                    <button type="button" className="btn btn-danger btn-block btn-text-big"
                            onClick={this.suggestUndo}>
                        Suggest undo
                    </button>
                </li>
                <li>
                    <button type="button" className="btn btn-danger btn-block btn-text-big"
                            onClick={this.surrender}>
                        Surrender
                    </button>
                </li>
                <li>
                    <button type="button" className="btn btn-danger btn-block btn-text-big"
                            onClick={this.suggestDrawn}>
                        Suggest drawn
                    </button>
                </li>
                <li>
                    <button type="button" className="btn btn-danger btn-block btn-text-big"
                            onClick={this.suggestNewGame}>
                        Suggest new game
                    </button>
                </li>
                <li>
                    <button type="button" className="btn btn-danger btn-block btn-text-big"
                            onClick={this.leaveRoom}>
                        Out game
                    </button>
                </li>
            </>
        );
    }
    
    render() { 
        const { socketId } = this.props;
        return (  
            <div className="game-info__moves overflow-auto">
                <ol className="list-moves list-unstyled">
                    { 
                        socketId === null && this.renderBtnFindEnemy()
                    }
                    { 
                        socketId && this.renderBtnWhenConnected()
                    }
                </ol>
            </div>
        );
    }
}
 
export default GameOnlineAction;