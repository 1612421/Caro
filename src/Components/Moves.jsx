import React from 'react';

const Moves = (props) => {
    const {history, stepNumber, content, ...other} = props;
    return ( 
        <div className="game-info__moves overflow-auto">
            <ol className="list-moves list-unstyled">
                <li>
                    <button type="button" className="btn btn-danger btn-block"
                            onClick={() => other.createNewGame()}>
                        New game
                    </button>
                </li>
                <li>
                <button type="button" className="btn btn-danger btn-block"
                            onClick={() => other.sort()}>
                        {
                            content
                        }
                    </button>
                </li>
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
                                        onClick={() => other.onClick(item.stepNumber)}>
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