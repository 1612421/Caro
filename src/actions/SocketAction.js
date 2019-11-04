import GameAction from './GameAction';

const SocketAction = {
    updateSocketId: (socketId) => ({ 
        type: 'UPDATE_SOCKET_ID', 
        payload: {
            socketId
        }
    }),

    invertFindingEnemyStatus: () => ({type: 'INVERT_FINDING_ENEMY_STATUS'}),
    leaveRoom: () => (dispatch) => {
        dispatch(GameAction.createNewGame());
        dispatch({type: 'LEAVE_ROOM'});
    },

    startGame: (data) => ({
        type: 'JOIN_ROOM',
        payload: data
    }),

    invertSocketStatus: () => ({type: 'INVERT_SOCKET_STATUS'})
};

export default SocketAction;