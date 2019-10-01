import React from 'react';

const Square = (props) => {
    const {value, moreClassName, ...other} = props;
    return (
         <button type="button" className={`square ${value} ${moreClassName}`} onClick={() => other.onClick()}>
            {value}
         </button>
    );
}

export default Square;