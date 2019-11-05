const initialState = {
    socketEventsIsCreated: false,
    isFindingEnemy: false,
    socketId: null,
    textOfFindEnemyBtn: 'Find enemy',
    enemyUsername: null,
    enemyAvatar: null,
    room: null,
    youAre: null,
    isBusy: false,
}

const SocketReducer = (state = initialState, action) => {
    switch (action.type){
        case 'INVERT_FINDING_ENEMY_STATUS':{
            const text = state.isFindingEnemy ?  'Find enemy' : 'Cancel finding enemy';

            return {
                ...state,
                isFindingEnemy: !state.isFindingEnemy,
                textOfFindEnemyBtn: text
            }
        }

        case 'UPDATE_ROOM':
            return {
                ...state,
                room: action.payload.room
            }      

        case 'JOIN_ROOM':
            return {
                ...state,
                enemyUsername: action.payload.username,
                enemyAvatar: action.payload.avatar,
                socketId: action.payload.socketId,
                room: action.payload.room,
                youAre: action.payload.youAre
            }    
        
        case 'LEAVE_ROOM':
            return {
                ...initialState,
                socketEventsIsCreated: state.socketEventsIsCreated
            }

        case 'INVERT_SOCKET_STATUS':
            return {
                ...state,
                socketEventsIsCreated: !state.socketEventsIsCreated
            }

        case 'INVERT_BUSY_STATUS':
            return {
                ...state,
                isBusy: !state.isBusy
            }
        default:
            return state;
    }
}

export default SocketReducer;