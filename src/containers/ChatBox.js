import { connect } from 'react-redux';
import ChatAction from '../actions/ChatAction';
import SocketAction from '../actions/SocketAction';
import ChatBox from '../components/ChatBox';

const mapStateToProps = (state) => {
    return {
        shouldShowChatBox: state.ChatReducer.shouldShowChatBox,
        messages: state.ChatReducer.messages,
        myAvatar: `http://localhost:3000/${state.UserReducer.avatar}`,
        myUsername: state.UserReducer.username,
        enemyAvatar: `http://localhost:3000/${state.SocketReducer.enemyAvatar}`,
        enemyUsername: state.SocketReducer.enemyUsername,
        socketId: state.SocketReducer.socketId
    }
}

const mapDispatchToProps = (dispatch) => ({
    invertShouldShowChatBox: () => dispatch(ChatAction.invertShouldShowChatBox()),
    addMessage: (message) => dispatch(ChatAction.addMessage(message)),
    invertPlayingGameStatus: () => dispatch(SocketAction.invertPlayingGameStatus()),
    invertFindingEnemyStatus: () => dispatch(SocketAction.invertFindingEnemyStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);