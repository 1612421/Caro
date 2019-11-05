import React from 'react';

const Status = (props) => {
    const {xIsNext, haveWinner, youAre, isDrawn } = props;
    const effect = haveWinner? 'bounce' : '';
    let status;

    if (isDrawn) {
        status = 'The game is drawn';
    } else if (haveWinner) {
        if ((youAre === 'x' && !xIsNext) || (youAre === 'o' && xIsNext)) {
            status = 'You win';
        } else {
            status = 'You lose';
        }
    } else {
        status = `Next player is: ${xIsNext? 'x' : 'o'}`;

        if ((youAre === 'x' && xIsNext) || (youAre === 'o' && !xIsNext)) {
            status += ' (you)';
        } else {
            status += ' (enemy)';
        }
    }

    return (  
        <div className="game-info__status">
            <div className={`status ${effect}`}>{status}</div>
        </div>
    );
}
 
export default Status;