const GameAction = {
    createNewGame: () => ({
        type: 'NEW_GAME',
        payload: {
            squares: Array(400).fill(null),
            xIsNext: true,
            stepNumber: 0,
            history: [],
            squaresWinner: [],
            haveWinner: false,
            oldSquaresWinner: []
        }
    }),

    clickSquare: (i) => ({
        type: 'CLICK_SQUARE',
        payload: i
    }),

    jumpToStepNumber: (i) => ({
        type: 'JUMP',
        payload: i
    }),

    sort: () => ({ type: 'SORT' })
};

export default GameAction;