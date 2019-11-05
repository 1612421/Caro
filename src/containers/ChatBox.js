import { connect } from 'react-redux';
import ChatAction from '../actions/ChatAction';
import SocketAction from '../actions/SocketAction';
import ChatBox from '../components/ChatBox';
import GameAction from '../actions/GameAction';

const mapStateToProps = (state) => {
    return {
        shouldShowChatBox: state.ChatReducer.shouldShowChatBox,
        messages: state.ChatReducer.messages,
        myAvatar: `http://localhost:3000/${state.UserReducer.avatar}`,
        myUsername: state.UserReducer.username,
        enemyAvatar: `http://localhost:3000/${state.SocketReducer.enemyAvatar}`,
        enemyUsername: state.SocketReducer.enemyUsername,
        socketId: state.SocketReducer.socketId,
        youAre: state.SocketReducer.youAre,
        socketEventsIsCreated: state.SocketReducer.socketEventsIsCreated,
        isBusy: state.SocketReducer.isBusy,
        haveWinner: state.GameReducer.haveWinner
    }
}

const mapDispatchToProps = (dispatch) => ({
    invertShouldShowChatBox: () => dispatch(ChatAction.invertShouldShowChatBox()),
    addMessage: (message) => dispatch(ChatAction.addMessage(message)),
    invertPlayingGameStatus: () => dispatch(SocketAction.invertPlayingGameStatus()),
    invertFindingEnemyStatus: () => dispatch(SocketAction.invertFindingEnemyStatus()),
    surrender: (data) => dispatch(GameAction.surrender(data)),
    invertSocketStatus: () => dispatch(SocketAction.invertSocketStatus()),
    setDrawnGame: () => dispatch(GameAction.setDrawnGame()),
    invertBusyStatus: () => dispatch(SocketAction.invertBusyStatus()),
    createNewGameOnline: (youAre) => dispatch(GameAction.createNewGameOnline(youAre)),
    undoPreAction: () => dispatch(GameAction.undoPreAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);