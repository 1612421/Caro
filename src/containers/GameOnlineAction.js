import { connect } from 'react-redux';
import SocketAction from '../actions/SocketAction';
import GameOnlineAction from '../components/GameOnlineAction';

const mapStateToProps = (state) => {
    return {
        isFindingEnemy: state.SocketReducer.isFindingEnemy,
        socketId: state.SocketReducer.socketId,
        textOfFindEnemyBtn: state.SocketReducer.textOfFindEnemyBtn,
        myUsername: state.UserReducer.username,
        myAvatar: state.UserReducer.avatar,
        haveWinner: state.GameReducer.haveWinner,
        isBusy: state.SocketReducer.isBusy,
        stepNumber: state.GameReducer.stepNumber
    }
}

const mapDispatchToProps = (dispatch) => ({
    invertFindingEnemyStatus: () => dispatch(SocketAction.invertFindingEnemyStatus()),
    leaveRoom: () => dispatch(SocketAction.leaveRoom()),
    invertBusyStatus: () => dispatch(SocketAction.invertBusyStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOnlineAction);