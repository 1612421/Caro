const ChatAction = {
    invertShouldShowChatBox: () => ({type: 'INVERT_SHOULD_SHOW_CB'}),
    addMessage: (message) => ({
        type: 'ADD_MESSAGE',
        payload: {
            message
        }
    })
}

export default ChatAction;