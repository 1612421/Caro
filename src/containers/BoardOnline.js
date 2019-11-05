import { connect } from 'react-redux';
import BoardOnline from '../components/BoardOnline';
import GameAction from '../actions/GameAction';

const mapStateToProps = (state) => {
    return {
        squares: state.GameReducer.squares,
        squaresWinner: state.GameReducer.squaresWinner,
        socketId: state.SocketReducer.socketId,
        haveWinner: state.GameReducer.haveWinner,
        xIsNext: state.GameReducer.xIsNext,
        youAre: state.SocketReducer.youAre,
        isBusy: state.SocketReducer.isBusy
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickSquare: (i) => dispatch(GameAction.clickSquare(i))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardOnline);