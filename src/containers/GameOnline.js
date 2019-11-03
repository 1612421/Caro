import { connect } from 'react-redux';
import GameAction from '../actions/GameAction';
import SocketAction from '../actions/SocketAction';
import GameOnline from '../components/GameOnline';

const mapStateToProps = (state) => {
    return {
        ...state.GameReducer,
        socketId: state.SocketReducer.socketId
    };
}

const mapDispatchToProps = (dispatch) => ({
    createNewGame: () => {
        dispatch(GameAction.createNewGame());
    },

    clickSquare: (i) => {
        dispatch(GameAction.clickSquare(i));
    },

    jumToStepNumber: (i) => {
        dispatch(GameAction.jumpToStepNumber(i));
    },

    sort: () => {
        dispatch(GameAction.sort());
    },

    startGame: (data) => dispatch(SocketAction.startGame(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOnline);