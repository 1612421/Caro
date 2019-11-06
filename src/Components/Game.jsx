import React, { Component } from 'react';

import Board from '../containers/Board';
import Status from '../containers/Status'
import Moves from '../containers/Moves';

class Game extends Component {
    componentDidMount(){
        const { invertPlayingOfflineStatus } = this.props;
        invertPlayingOfflineStatus();
    }

    componentWillUnmount() {
        const { invertPlayingOfflineStatus } = this.props;
        invertPlayingOfflineStatus();
    }

    render(){  
        const cells = [...Array(400).keys()];

        return(
            <div className="game">
                <div className="game-board">
                    <Board cells={cells} />
                </div>
                <div className="game-info">
                    <Status />
                    <Moves />
                </div>
            </div>
        );
    }
}

export default Game;