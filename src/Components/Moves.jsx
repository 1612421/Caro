import React, { Component } from 'react';

class Moves extends Component{

    componentDidUpdate() {
        const { youAre, playByBot } = this.props;

        if ((youAre === 'x' && !this.getXIsNext()) || (youAre === 'o' && this.getXIsNext())){
            console.log(this.getXIsNext());
            playByBot();
        }
    }

    jumpTo = (stepNumner) => {
        const { jumpToStepNumber } = this.props;
        jumpToStepNumber(stepNumner);
    }

    

    getXIsNext = () => {
        const { xIsNext } = this.props;
        return xIsNext;
    }

    render() {
        const {history, stepNumber, content, createNewGame, sort} = this.props;
        return ( 
            <div className="game-info__moves overflow-auto">
                <ol className="list-moves list-unstyled">
                    <li>
                        <button type="button" className="btn btn-danger btn-block btn-text-big"
                                onClick={() => createNewGame()}>
                            New game
                        </button>
                    </li>
                    <li>
                        <button type="button" className="btn btn-danger btn-block btn-text-big"
                                onClick={() => sort()}>
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
                                            onClick={() => this.jumpTo(item.stepNumber)}>
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