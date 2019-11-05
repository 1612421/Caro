import React from 'react';
import GameOnlineAction from '../containers/GameOnlineAction';

const Moves = (props) => {
    const {history, stepNumber, socket } = props;
    return ( 
        <div className="game-info__moves overflow-auto">
            <ol className="list-moves list-unstyled">
                <GameOnlineAction socket={socket}/>
                {
                    history.map((item)=>{
                        const col = item.clickIndex % 20;
                        const row = Math.floor(item.clickIndex / 20);
                        const clickPosition = `(row: ${row}, col: ${col})`;
                        const desc = `Go to move #${item.stepNumber}${clickPosition}`;
                        const btnHighlight = (item.stepNumber === stepNumber - 1) ? 'btn-primary' : 'btn-secondary';
                        return (
                            <li key={item.stepNumber}>
                                <button type="button" 
                                        className={`btn ${btnHighlight} btn-block btn-custom`}
                                        onClick={() => {}}>
                                    {desc}
                                </button>
                            </li>
                        );
                    })
                }
            </ol>
        </div>
    );
}

export default Moves;