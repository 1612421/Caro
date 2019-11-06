import { connect } from 'react-redux';
import Board from '../components/Board';
import GameAction from '../actions/GameAction';

const mapStateToProps = (state) => {
    return {
        squares: state.GameReducer.squares,
        squaresWinner: state.GameReducer.squaresWinner,
        haveWinner: state.GameReducer.haveWinner,
        xIsNext: state.GameReducer.xIsNext,
        youAre: state.SocketReducer.youAre,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickSquare: (i) => dispatch(GameAction.clickSquare(i)),
        playByBot: () => dispatch(GameAction.playByBot())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);