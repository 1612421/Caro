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

    handleClick(i){
        if(this.haveWinner){
            return;
        }

        const temp = this.state.squares.slice();
        
        if (temp[i] != null){
            return;
        }

        this.recentlyChecked = i;
        temp[i] = this.state.xIsNext? 'x' : 'o';
        let tempHistory = [];

        if (this.state.content === 'Increment')
        {
            tempHistory = this.state.history.slice(0, this.state.stepNumber);
            tempHistory.push({
                value: temp[i],
                clickIndex: i,
                stepNumber: this.state.stepNumber
            });
        }else{
            tempHistory = this.state.history.slice(this.state.history.length - this.state.stepNumber);
            tempHistory.unshift({
                value: temp[i],
                clickIndex: i,
                stepNumber: this.state.stepNumber
            });
        }
        
        this.setState({
            squares: temp,
            xIsNext: !this.state.xIsNext,
            history: tempHistory,
            stepNumber: this.state.stepNumber + 1
        }, () => {
            let haveWinner = this.calculateWinner();

            if (haveWinner){
                this.setState({
                    haveWinner: true,
                    squaresWinner: this.squaresWinner
                })
            }
        });
    }

    // Kiểm tra hàng ngang
    checkRow(){
        var temp = 0;
        var head1 = false;
        var head2 = false;
        var i = this.recentlyChecked;
        var currentRow = Math.floor(i / 20);
        var nextPlayer = this.state.xIsNext ? 'x' : 'o';
        var winner = [];

        while (temp < 5){
            if (this.state.squares[i] === null){
                break;
            }

            if (this.state.squares[i] === nextPlayer){
                head1 = true;
                break;
            }

            ++temp;

            if (Math.floor((i - 1) / 20) !== currentRow){
                head1 = true;
                break;
            }

            if ((temp === 5) && (this.state.squares[i - 1] === nextPlayer)){
                head1 = true;
            }

            winner.push(i);
            --i;
        }

        i = this.recentlyChecked;
        winner.shift();

        while (temp < 6){
            if (this.state.squares[i] === null){
                break;
            }

            if (this.state.squares[i] === nextPlayer){
                head2 = true;
                break;
            }

            ++temp;

            if (Math.floor((i + 1) / 20) !== currentRow){
                head2 = true;
                break;
            }

            if ((temp === 6) && (this.state.squares[i + 1] === nextPlayer)){
                head2 = true;
            }

            winner.push(i);
            ++i;
        }

        if ((temp === 6) && !((head1 === true) && (head2 === true))){
            this.squaresWinner = winner;
            return true;
        }
        else{
            return false;
        }
    }

    // Kiểm tra hàng dọc
    checkColumn(){
        var temp = 0;
        var head1 = false;
        var head2 = false;
        var i = this.recentlyChecked;
        var nextPlayer = this.state.xIsNext ? 'x' : 'o';
        var winner = [];

        while (temp < 5){
            
            if (this.state.squares[i] === null){
                break;
            }

            if (this.state.squares[i] === nextPlayer){
                head1 = true;
                break;
            }

            ++temp;

            if (i - 20 < 0){
                head1 = true;
                break;
            }

            if ((temp === 5) && (this.state.squares[i - 20] === nextPlayer)){
                head1 = true;
            }

            winner.push(i);
            i -= 20;
        }

        i = this.recentlyChecked;
        winner.shift();

        while (temp < 6){
            
            if (this.state.squares[i] === null){
                break;
            }

            if (this.state.squares[i] === nextPlayer){
                head2 = true;
                break;
            }

            ++temp;

            if (i + 20 > 399){
                head2 = true;
                break;
            }

            if ((temp === 6) && (this.state.squares[i + 20] === nextPlayer)){
                head2 = true;
            }

            winner.push(i);
            i += 20;
        }

        if ((temp === 6) && !((head1 === true) && (head2 === true))){
            this.squaresWinner = winner;
            return true;
        }
        else{
            return false;
        }
    }

    // Kiểm tra đường chéo trái sang phải
    checkSlash(){
        var temp = 0;
        var head1 = false;
        var head2 = false;
        var i = this.recentlyChecked;
        var nextPlayer = this.state.xIsNext ? 'x' : 'o';
        var winner = [];

        while (temp < 5){
            
            if (this.state.squares[i] === null){
                break;
            }

            if (this.state.squares[i] === nextPlayer){
                head1 = true;
                break;
            }

            ++temp;

            if (i - 21 < 0){
                head1 = true;
                break;
            }

            if ((temp === 5) && (this.state.squares[i - 21] === nextPlayer)){
                head1 = true;
            }

            winner.push(i);
            i -= 21;
        }

        i = this.recentlyChecked;
        winner.shift();

        while (temp < 6){
            
            if (this.state.squares[i] === null){
                break;
            }

            if (this.state.squares[i] === nextPlayer){
                head2 = true;
                break;
            }

            ++temp;

            if (i + 21 > 399){
                head2 = true;
                break;
            }

            if ((temp === 6) && (this.state.squares[i + 21] === nextPlayer)){
                head2 = true;
            }

            winner.push(i);
            i += 21;
        }

        if ((temp === 6) && !((head1 === true) && (head2 === true))){
            this.squaresWinner = winner;
            return true;
        }
        else{
            return false;
        }
    }

    // Kiểm tra đường chéo phải sang trái
    checkBackSlash(){
        var temp = 0;
        var head1 = false;
        var head2 = false;
        var i = this.recentlyChecked;
        var nextPlayer = this.state.xIsNext ? 'x' : 'o';
        var winner = [];

        while (temp < 5){
            
            if (this.state.squares[i] === null){
                break;
            }

            if (this.state.squares[i] === nextPlayer){
                head1 = true;
                break;
            }

            ++temp;

            if (i - 19 < 0){
                head1 = true;
                break;
            }

            if ((temp === 5) && (this.state.squares[i - 19] === nextPlayer)){
                head1 = true;
            }

            winner.push(i);
            i -= 19;
        }

        i = this.recentlyChecked;
        winner.shift();

        while (temp < 6){
            
            if (this.state.squares[i] === null){
                break;
            }

            if (this.state.squares[i] === nextPlayer){
                head2 = true;
                break;
            }

            ++temp;

            if (i + 19 > 399){
                head2 = true;
                break;
            }

            if ((temp === 6) && (this.state.squares[i + 19] === nextPlayer)){
                head2 = true;
            }

            winner.push(i);
            i += 19;
        }

        if ((temp === 6) && !((head1 === true) && (head2 === true))){
            this.squaresWinner = winner;
            return true;
        }
        else{
            return false;
        }
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

    createNewGame(){
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

    handleClickBtnMove(index){
        var tempSquares = Array(400).fill(null);
        var { history, content } = this.state;
        var tempSquaresWinner = [];
        
        if (content === 'Increment'){
            for (let i = 0; i < index + 1; ++i){
                tempSquares[history[i].clickIndex] = history[i].value;
            }

            if (index === history.length - 1){
                tempSquaresWinner = this.squaresWinner;
            }

            this.setState({
                squares: tempSquares,
                stepNumber: index + 1,
                xIsNext: history[index].value === 'x' ? false : true,
                squaresWinner: tempSquaresWinner
            });
        }else{
            var len = history.length;
            for (let i = 0; i < index + 1; ++i){
                tempSquares[history[len - i - 1].clickIndex] = history[len - i - 1].value;
            }
            
            if (history.length - index - 1 === 0){
                tempSquaresWinner = this.squaresWinner;
            }

            this.setState({
                squares: tempSquares,
                stepNumber: index + 1,
                xIsNext: history[len - index - 1].value === 'x' ? false : true,
                squaresWinner: tempSquaresWinner
            });
        }
    }

    sort(){
        if (this.state.content === 'Increment'){
            this.setState({
                history: this.state.history.reverse(),
                content: 'Decrement'
            });
        }else{
            this.setState({
                history: this.state.history.reverse(),
                content: 'Increment'
            });
        }
    }

    render(){
        const cells = [...Array(400).keys()];
        return(
            <div className="game">
                <div className="game-board">
                    <Board cells={cells} 
                            squares={this.state.squares}
                            squaresWinner={this.state.squaresWinner}
                            onClick={this.handleClick.bind(this)}>
                    </Board>
                </div>
                <div className="game-info">
                    <Status xIsNext={this.state.xIsNext}
                            haveWinner={this.state.haveWinner}/>
                    <Moves createNewGame={this.createNewGame.bind(this)}
                            history={this.state.history}
                            stepNumber={this.state.stepNumber}
                            onClick={this.handleClickBtnMove.bind(this)}
                            content={this.state.content}
                            sort={this.sort.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Game;