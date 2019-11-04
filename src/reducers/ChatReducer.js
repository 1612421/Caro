const initialState = {
    shouldShowChatBox: true,
    messages: []
}

const ChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INVERT_SHOULD_SHOW_CB':
            return {
                ...state,
                shouldShowChatBox: !state.shouldShowChatBox
            }
        case 'ADD_MESSAGE': {
            const messages = [...state.messages, action.payload.message];
            return{
                ...state,
                messages
            }
        }
        case 'LEAVE_ROOM':
            return initialState;
        default:
            return state;
    }
}

export default ChatReducer;