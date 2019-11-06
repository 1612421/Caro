import { connect } from 'react-redux';
import Moves from '../components/Moves';
import GameAction from '../actions/GameAction';

const mapStateToProps = (state) => {
    return {
        history: state.GameReducer.history,
        stepNumber: state.GameReducer.stepNumber,
        xIsNext: state.GameReducer.xIsNext,
        youAre: state.SocketReducer.youAre,
        content: state.GameReducer.content
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        jumpToStepNumber: (i) => dispatch(GameAction.jumpToStepNumber(i)),
        sort: () => dispatch(GameAction.sort()),
        createNewGame: () => dispatch(GameAction.createNewGame()),
        playByBot: () => dispatch(GameAction.playByBot())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Moves);