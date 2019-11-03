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

    renderBtnFindEnemy = () => {
        const { textOfFindEnemyBtn } = this.props;

        return (
            <button type="button" className="btn btn-danger btn-block btn-text-big"
                    onClick={this.findEnemy}>
                {textOfFindEnemyBtn}
            </button>
        );
    }

    renderBtnOutGame = () => {
        const { leaveRoom } = this.props;

        return (
            <button type="button" className="btn btn-danger btn-block btn-text-big"
                    onClick={leaveRoom}>
                Out game
            </button>
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
                    socketId && this.renderBtnOutGame()
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