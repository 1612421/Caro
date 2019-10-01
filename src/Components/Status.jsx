import React, { Component } from 'react';

class Status extends Component {

    render() { 
        const {xIsNext, haveWinner} = this.props;
        const effect = haveWinner? 'bounce' : '';
        let status;

        if (haveWinner){
            status = 'Winner is: ' + (xIsNext? 'o' : 'x');
        }else{
            status = 'Next player is: ' + (xIsNext? 'x' : 'o');
        }

        return (  
            <div className="game-info__status">
                <div className={'status '+ effect}>{status}</div>
            </div>
        );
    }
}
 
export default Status;