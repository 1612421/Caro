import React from 'react';

const Status = (props) => {
    const {xIsNext, haveWinner, youAre } = props;
    const effect = haveWinner? 'bounce' : '';
    let status;

    if (haveWinner){
        if ((youAre === 'x' && !xIsNext) || (youAre === 'o' && xIsNext)) {
            status = 'You win';
        } else {
            status = 'You lose';
        }
    }else{
        status = `Next player is: ${xIsNext? 'x' : 'o'}`;

        if ((youAre === 'x' && xIsNext) || (youAre === 'o' && !xIsNext)) {
            status += ' (you)';
        }
    }

    return (  
        <div className="game-info__status">
            <div className={`status ${effect}`}>{status}</div>
        </div>
    );
}
 
export default Status;