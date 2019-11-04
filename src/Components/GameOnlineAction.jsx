import React, { Component } from 'react';

class GameOnlineAction extends Component {

    findEnemy = () => {
        const { socket, invertFindingEnemyStatus, myUsername, myAvatar, isFindingEnemy } = this.props;

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
        const { socket } = this.props;
        socket.emit('surrender');
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
                            onClick={this.surrender}>
                        Surrender
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
                {/* <li>
                    <button type="button" className="btn btn-danger btn-block btn-text-big"
                            onClick={() => other.createNewGame()}>
                        New game
                    </button>
                </li> */}
            </ol>
        </div>
        );
    }
}
 
export default GameOnlineAction;