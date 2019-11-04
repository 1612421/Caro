import { connect } from 'react-redux';
import SocketAction from '../actions/SocketAction';
import GameOnlineAction from '../components/GameOnlineAction';

const mapStateToProps = (state) => {
    return {
        isFindingEnemy: state.SocketReducer.isFindingEnemy,
        socketId: state.SocketReducer.socketId,
        textOfFindEnemyBtn: state.SocketReducer.textOfFindEnemyBtn,
        myUsername: state.UserReducer.username,
        myAvatar: state.UserReducer.avatar
    }
}

const mapDispatchToProps = (dispatch) => ({
    invertFindingEnemyStatus: () => dispatch(SocketAction.invertFindingEnemyStatus()),
    leaveRoom: () => dispatch(SocketAction.leaveRoom())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOnlineAction);