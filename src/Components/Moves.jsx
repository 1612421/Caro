import React, { Component } from 'react';

class Moves extends Component {
    render() { 
        const {history, stepNumber, content, ...other} = this.props;
        return ( 
            <div className="game-info__moves overflow-auto">
                <ol className="list-moves list-unstyled">
                    <li>
                        <button className="btn btn-danger btn-block"
                                onClick={() => other.createNewGame()}>
                            New game
                        </button>
                    </li>
                    <li>
                    <button className="btn btn-danger btn-block"
                                onClick={() => other.sort()}>
                            {
                                content
                            }
                        </button>
                    </li>
                    {
                        history.map((item, index)=>{
                            let col = item.clickIndex % 20;
                            let row = Math.floor(item.clickIndex / 20);
                            let clickPosition = `(row: ${row}, col: ${col})`;
                            let desc = `Go to move #${item.stepNumber}${clickPosition}`;
                            let btnHighlight = (item.stepNumber === stepNumber - 1) ? 'btn-primary' : 'btn-secondary';
                            return (
                                <li key={item.stepNumber}>
                                    <button type="button" 
                                            className={"btn " + btnHighlight + " btn-block btn-custom"}
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
}
 
export default Moves;