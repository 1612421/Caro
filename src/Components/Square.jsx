import React, { Component } from 'react';

class Square extends Component{
    render() {
        const {value, moreClassName, ...other} = this.props
        return (
             <button className={`square ${value} ${moreClassName}`} onClick={() => other.onClick()}>
                {value}
             </button>
        );
    }
}

export default Square;