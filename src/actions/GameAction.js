const GameAction = {
    createNewGame: () => ({type: 'NEW_GAME'}),

    clickSquare: (i) => ({
        type: 'CLICK_SQUARE',
        payload: i
    }),

    jumpToStepNumber: (i) => ({
        type: 'JUMP',
        payload: i
    }),

    sort: () => ({ type: 'SORT' }),
    surrender: (data) => ({type: 'SURRENDER', payload: data}),
    setDrawnGame: () => ({type: 'DRAWN'}),
    createNewGameOnline: (youAre) => ({type: 'NEW_GAME_ONLINE', payload: youAre}),
    undoPreAction: () => ({type: 'UNDO'})
};

export default GameAction;