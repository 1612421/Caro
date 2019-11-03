const SocketAction = {
    updateSocketId: (socketId) => ({ 
        type: 'UPDATE_SOCKET_ID', 
        payload: {
            socketId
        }
    }),

    invertFindingEnemyStatus: () => ({type: 'INVERT_FINDING_ENEMY_STATUS'}),
    leaveRoom: () => ({type: 'LEAVE_ROOM'}),
    startGame: (data) => ({
        type: 'JOIN_ROOM',
        payload: data
    })
};

export default SocketAction;