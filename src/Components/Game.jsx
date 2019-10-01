import React, { Component } from 'react';
import Board from './Board';
import Status from './Status'
import Moves from './Moves';

class Game extends Component{
    constructor()
    {
        super();
        this.state = {
            squares: Array(400).fill(null),
            xIsNext: true,
            stepNumber: 0,
            history: [],
            squaresWinner: [],
            haveWinner: false,
            content: 'Increment'
        };
        this.recentlyChecked = 0;
        this.haveWinner = false;
        this.squaresWinner = [];
    }

    handleClick = (i) => {
        if(this.haveWinner){
            return;
        }

        const { squares, xIsNext, content, history, stepNumber } = this.state;
        const temp = squares.slice();
        
        if (temp[i] != null){
            return;
        }

        this.recentlyChecked = i;
        temp[i] = xIsNext? 'x' : 'o';
        let tempHistory = [];

        if (content === 'Increment')
        {
            tempHistory = history.slice(0, stepNumber);
            tempHistory.push({
                value: temp[i],
                clickIndex: i,
                stepNumber
            });
        }else{
            tempHistory = history.slice(history.length - stepNumber);
            tempHistory.unshift({
                value: temp[i],
                clickIndex: i,
                stepNumber
            });
        }
        
        this.setState({
            squares: temp,
            xIsNext: !xIsNext,
            history: tempHistory,
            stepNumber: stepNumber + 1
        }, () => {
            const haveWinner = this.calculateWinner();

            if (haveWinner){
                this.setState({
                    haveWinner: true,
                    squaresWinner: this.squaresWinner
                })
            }
        });
    }

    createNewGame = () => {
        this.squaresWinner = [];
        this.haveWinner = false;
        this.recentlyChecked = 0;
        this.setState({
            squares: Array(400).fill(null),
            xIsNext: true,
            stepNumber: 0,
            history: [],
            squaresWinner: [],
            haveWinner: false
        });
    }

    handleClickBtnMove = (index) => {
        const tempSquares = Array(400).fill(null);
        const { history, content } = this.state;
        let tempSquaresWinner = [];
        
        if (content === 'Increment'){
            for (let i = 0; i < index + 1; i += 1){
                tempSquares[history[i].clickIndex] = history[i].value;
            }

            if (index === history.length - 1){
                tempSquaresWinner = this.squaresWinner;
            }

            this.setState({
                squares: tempSquares,
                stepNumber: index + 1,
                xIsNext: history[index].value !== 'x',
                squaresWinner: tempSquaresWinner
            });
        }else{
            const len = history.length;
            for (let i = 0; i < index + 1; i += 1){
                tempSquares[history[len - i - 1].clickIndex] = history[len - i - 1].value;
            }
            
            if (history.length - index - 1 === 0){
                tempSquaresWinner = this.squaresWinner;
            }

            this.setState({
                squares: tempSquares,
                stepNumber: index + 1,
                xIsNext: history[len - index - 1].value !== 'x',
                squaresWinner: tempSquaresWinner
            });
        }
    }

    sort = () => {
        const { content, history } = this.state;

        if (content === 'Increment'){
            this.setState({
                history: history.reverse(),
                content: 'Decrement'
            });
        }else{
            this.setState({
                history: history.reverse(),
                content: 'Increment'
            });
        }
    }

    // Kiểm tra hàng ngang
    checkRow(){
        let temp = 0;
        let head1 = false;
        let head2 = false;
        let i = this.recentlyChecked;
        const currentRow = Math.floor(i / 20);
        const { xIsNext, squares } = this.state;
        const nextPlayer = xIsNext ? 'x' : 'o';
        const winner = [];

        while (temp < 5){
            if (squares[i] === null){
                break;
            }

            if (squares[i] === nextPlayer){
                head1 = true;
                break;
            }

            temp += 1;

            if (Math.floor((i - 1) / 20) !== currentRow){
                head1 = true;
                break;
            }

            if ((temp === 5) && (squares[i - 1] === nextPlayer)){
                head1 = true;
            }

            winner.push(i);
            i -= 1;
        }

        i = this.recentlyChecked;
        winner.shift();

        while (temp < 6){
            if (squares[i] === null){
                break;
            }

            if (squares[i] === nextPlayer){
                head2 = true;
                break;
            }

            temp += 1;

            if (Math.floor((i + 1) / 20) !== currentRow){
                head2 = true;
                break;
            }

            if ((temp === 6) && (squares[i + 1] === nextPlayer)){
                head2 = true;
            }

            winner.push(i);
            i += 1;
        }

        if ((temp === 6) && !((head1 === true) && (head2 === true))){
            this.squaresWinner = winner;
            return true;
        }
        
        return false;
    }

    // Kiểm tra hàng dọc
    checkColumn(){
        let temp = 0;
        let head1 = false;
        let head2 = false;
        let i = this.recentlyChecked;
        const {xIsNext, squares} = this.state;
        const  nextPlayer = xIsNext ? 'x' : 'o';
        const winner = [];

        while (temp < 5){
            
            if (squares[i] === null){
                break;
            }

            if (squares[i] === nextPlayer){
                head1 = true;
                break;
            }

            temp += 1;

            if (i - 20 < 0){
                head1 = true;
                break;
            }

            if ((temp === 5) && (squares[i - 20] === nextPlayer)){
                head1 = true;
            }

            winner.push(i);
            i -= 20;
        }

        i = this.recentlyChecked;
        winner.shift();

        while (temp < 6){
            
            if (squares[i] === null){
                break;
            }

            if (squares[i] === nextPlayer){
                head2 = true;
                break;
            }

            temp += 1;

            if (i + 20 > 399){
                head2 = true;
                break;
            }

            if ((temp === 6) && (squares[i + 20] === nextPlayer)){
                head2 = true;
            }

            winner.push(i);
            i += 20;
        }

        if ((temp === 6) && !((head1 === true) && (head2 === true))){
            this.squaresWinner = winner;
            return true;
        }
            
        return false;
    }

    // Kiểm tra đường chéo trái sang phải
    checkSlash(){
        let temp = 0;
        let head1 = false;
        let head2 = false;
        let i = this.recentlyChecked;
        const {xIsNext, squares} = this.state;
        const nextPlayer = xIsNext ? 'x' : 'o';
        const winner = [];

        while (temp < 5){
            
            if (squares[i] === null){
                break;
            }

            if (squares[i] === nextPlayer){
                head1 = true;
                break;
            }

            temp += 1;

            if (i - 21 < 0){
                head1 = true;
                break;
            }

            if ((temp === 5) && (squares[i - 21] === nextPlayer)){
                head1 = true;
            }

            winner.push(i);
            i -= 21;
        }

        i = this.recentlyChecked;
        winner.shift();

        while (temp < 6){
            
            if (squares[i] === null){
                break;
            }

            if (squares[i] === nextPlayer){
                head2 = true;
                break;
            }

            temp += 1;

            if (i + 21 > 399){
                head2 = true;
                break;
            }

            if ((temp === 6) && (squares[i + 21] === nextPlayer)){
                head2 = true;
            }

            winner.push(i);
            i += 21;
        }

        if ((temp === 6) && !((head1 === true) && (head2 === true))){
            this.squaresWinner = winner;
            return true;
        }

        return false;
    }

    // Kiểm tra đường chéo phải sang trái
    checkBackSlash(){
        let temp = 0;
        let head1 = false;
        let head2 = false;
        let i = this.recentlyChecked;
        const {xIsNext, squares} = this.state;
        const nextPlayer = xIsNext ? 'x' : 'o';
        const winner = [];

        while (temp < 5){
            
            if (squares[i] === null){
                break;
            }

            if (squares[i] === nextPlayer){
                head1 = true;
                break;
            }

            temp += 1;

            if (i - 19 < 0){
                head1 = true;
                break;
            }

            if ((temp === 5) && (squares[i - 19] === nextPlayer)){
                head1 = true;
            }

            winner.push(i);
            i -= 19;
        }

        i = this.recentlyChecked;
        winner.shift();

        while (temp < 6){
            
            if (squares[i] === null){
                break;
            }

            if (squares[i] === nextPlayer){
                head2 = true;
                break;
            }

            temp += 1;

            if (i + 19 > 399){
                head2 = true;
                break;
            }

            if ((temp === 6) && (squares[i + 19] === nextPlayer)){
                head2 = true;
            }

            winner.push(i);
            i += 19;
        }

        if ((temp === 6) && !((head1 === true) && (head2 === true))){
            this.squaresWinner = winner;
            return true;
        }
            
        return false;
    }

    // Kiểm tra xem người chơi hiện tại có thắng không
    calculateWinner(){
        if (this.checkRow()){
            this.haveWinner = true;
            return true;
        }

        if (this.checkColumn()){
            this.haveWinner = true;
            return true;
        }

        if (this.checkSlash()){
            this.haveWinner = true;
            return true;
        }

        if (this.checkBackSlash()){
            this.haveWinner = true;
            return true;
        }

        this.haveWinner = false;
        return false;
    }

    render(){
        const cells = [...Array(400).keys()];
        const { squares, squaresWinner, xIsNext, haveWinner, history, stepNumber, content } = this.state;

        return(
            <div className="game">
                <div className="game-board">
                    <Board cells={cells} 
                            squares={squares}
                            squaresWinner={squaresWinner}
                            onClick={this.handleClick}/>
                </div>
                <div className="game-info">
                    <Status xIsNext={xIsNext}
                            haveWinner={haveWinner}/>
                    <Moves createNewGame={this.createNewGame}
                            history={history}
                            stepNumber={stepNumber}
                            onClick={this.handleClickBtnMove}
                            content={content}
                            sort={this.sort} />
                </div>
            </div>
        );
    }
}

export default Game;